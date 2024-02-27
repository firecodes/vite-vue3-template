<template>
  <teleport to="body" :disabled="!teleported">
    <transition name="viewer-fade" appear>
      <div ref="wrapper" :tabindex="-1" :class="ns.e('wrapper')" :style="{ zIndex: computedZIndex }">
        <div :class="ns.e('mask')" @click.self="hideOnClickModal && hide()"></div>

        <!-- CLOSE -->
        <span :class="[ns.e('btn'), ns.e('close')]" @click="hide">
          <n-icon>
            <CloseOutlined />
          </n-icon>
        </span>

        <!-- ARROW -->
        <template v-if="!isSingle">
          <span :class="arrowPrevKls" @click="prev">
            <n-icon>
              <LeftOutlined />
            </n-icon>
          </span>
          <span :class="arrowNextKls" @click="next">
            <n-icon>
              <RightOutlined />
            </n-icon>
          </span>
        </template>
        <!-- ACTIONS -->
        <div :class="[ns.e('btn'), ns.e('actions')]">
          <div :class="ns.e('actions__inner')">
            <n-icon @click="handleActions('zoomOut')">
              <ZoomInOutlined />
            </n-icon>
            <n-icon @click="handleActions('zoomIn')">
              <ZoomOutOutlined />
            </n-icon>
            <i :class="ns.e('actions__divider')"></i>
            <n-icon @click="toggleMode">
              <component :is="mode.icon" />
            </n-icon>
            <i :class="ns.e('actions__divider')"></i>
            <n-icon @click="handleActions('anticlockwise')">
              <UndoOutlined style="transform: scale(1) rotate(120deg) translate(0px, 0px);" />
            </n-icon>
            <n-icon @click="handleActions('clockwise')">
              <RedoOutlined style="transform: scale(1) rotate(-120deg) translate(0px, 0px);" />
            </n-icon>
            <n-icon @click="handleActions('downloadIcon')">
              <DownloadOutlined />
            </n-icon>
          </div>
        </div>
        <!-- CANVAS -->
        <div :class="ns.e('canvas')">
          <img v-for="(url, i) in urlList" v-show="i === activeIndex" :ref="(el) => (imgRefs[i] = el as HTMLImageElement)"
            :key="url" :src="url" :style="imgStyle" :class="ns.e('img')" @load="handleImgLoad" @error="handleImgError"
            @mousedown="handleMouseDown" />
        </div>
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, effectScope, markRaw, nextTick, onMounted, ref, shallowRef, watch, } from 'vue'
import { useEventListener } from '@vueuse/core'
import { throttle } from 'lodash-unified'
import { useNamespace } from '../hooks'
import { isNumber, keysOf } from '../utils'
import { EVENT_CODE } from '../_utils'
import { downloadByUrl } from '../downloadFile'
// import ElIcon from '@element-plus/components/icon'
// import { ArrowLeft, ArrowRight, Close, FullScreen, RefreshLeft, RefreshRight, ScaleToOriginal, ZoomIn, ZoomOut } from '@element-plus/icons-vue'
import { imageViewerEmits, imageViewerProps } from './image-viewer'
import type { CSSProperties } from 'vue'
import type { ImageViewerAction, ImageViewerMode } from './image-viewer'


import {
  CloseOutlined, LeftOutlined, RightOutlined, ZoomInOutlined, ZoomOutOutlined, ExpandOutlined, OneToOneOutlined, UndoOutlined, RedoOutlined, DownloadOutlined
} from '@vicons/antd';
const modes: Record<'CONTAIN' | 'ORIGINAL', ImageViewerMode> = {
  CONTAIN: {
    name: 'contain',
    icon: markRaw(ExpandOutlined), // FullScreen
  },
  ORIGINAL: {
    name: 'original',
    icon: markRaw(OneToOneOutlined), // ScaleToOriginal
  },
}
defineOptions({
  name: 'ElImageViewer',
})

const props = defineProps(imageViewerProps)
const emit = defineEmits(imageViewerEmits)

const ns = useNamespace('image-viewer')
const nextZIndex = 1000
const wrapper = ref<HTMLDivElement>()
const imgRefs = ref<HTMLImageElement[]>([])

const scopeEventListener = effectScope()

const loading = ref(true)
const activeIndex = ref(props.initialIndex)
const mode = shallowRef<ImageViewerMode>(modes.CONTAIN)
const transform = ref({
  scale: 1,
  deg: 0,
  offsetX: 0,
  offsetY: 0,
  enableTransition: false,
})

const isSingle = computed(() => {
  const { urlList } = props
  return urlList.length <= 1
})

const isFirst = computed(() => {
  return activeIndex.value === 0
})

const isLast = computed(() => {
  return activeIndex.value === props.urlList.length - 1
})

const currentImg = computed(() => {
  return props.urlList[activeIndex.value]
})

const arrowPrevKls = computed(() => [
  ns.e('btn'),
  ns.e('prev'),
  ns.is('disabled', !props.infinite && isFirst.value),
])

const arrowNextKls = computed(() => [
  ns.e('btn'),
  ns.e('next'),
  ns.is('disabled', !props.infinite && isLast.value),
])

const imgStyle = computed(() => {
  const { scale, deg, offsetX, offsetY, enableTransition } = transform.value
  let translateX = offsetX / scale
  let translateY = offsetY / scale

  switch (deg % 360) {
    case 90:
    case -270:
      [translateX, translateY] = [translateY, -translateX]
      break
    case 180:
    case -180:
      [translateX, translateY] = [-translateX, -translateY]
      break
    case 270:
    case -90:
      [translateX, translateY] = [-translateY, translateX]
      break
  }

  const style: CSSProperties = {
    transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
    transition: enableTransition ? 'transform .3s' : '',
  }
  if (mode.value.name === modes.CONTAIN.name) {
    style.maxWidth = style.maxHeight = '100%'
  }
  return style
})

const computedZIndex = computed(() => {
  return isNumber(props.zIndex) ? props.zIndex : nextZIndex
})

function hide() {
  unregisterEventListener()
  emit('close')
}

function registerEventListener() {
  const keydownHandler = throttle((e: KeyboardEvent) => {
    switch (e.code) {
      // ESC
      case EVENT_CODE.esc:
        props.closeOnPressEscape && hide()
        break
      // SPACE
      case EVENT_CODE.space:
        toggleMode()
        break
      // LEFT_ARROW
      case EVENT_CODE.left:
        prev()
        break
      // UP_ARROW
      case EVENT_CODE.up:
        handleActions('zoomIn')
        break
      // RIGHT_ARROW
      case EVENT_CODE.right:
        next()
        break
      // DOWN_ARROW
      case EVENT_CODE.down:
        handleActions('zoomOut')
        break
    }
  })
  const mousewheelHandler = throttle((e: WheelEvent) => {
    const delta = e.deltaY || e.deltaX
    handleActions(delta < 0 ? 'zoomIn' : 'zoomOut', {
      zoomRate: props.zoomRate,
      enableTransition: false,
    })
  })

  scopeEventListener.run(() => {
    useEventListener(document, 'keydown', keydownHandler)
    useEventListener(document, 'wheel', mousewheelHandler)
  })
}

function unregisterEventListener() {
  scopeEventListener.stop()
}

function handleImgLoad() {
  loading.value = false
}

function handleImgError(e: Event) {
  loading.value = false;
  (e.target as HTMLImageElement).alt = `加载错误`
}

function handleMouseDown(e: MouseEvent) {
  if (loading.value || e.button !== 0 || !wrapper.value) return
  transform.value.enableTransition = false

  const { offsetX, offsetY } = transform.value
  const startX = e.pageX
  const startY = e.pageY

  const dragHandler = throttle((ev: MouseEvent) => {
    transform.value = {
      ...transform.value,
      offsetX: offsetX + ev.pageX - startX,
      offsetY: offsetY + ev.pageY - startY,
    }
  })
  const removeMousemove = useEventListener(document, 'mousemove', dragHandler)
  useEventListener(document, 'mouseup', () => {
    removeMousemove()
  })

  e.preventDefault()
}

function reset() {
  transform.value = {
    scale: 1,
    deg: 0,
    offsetX: 0,
    offsetY: 0,
    enableTransition: false,
  }
}

function toggleMode() {
  if (loading.value) return

  const modeNames = keysOf(modes)
  const modeValues = Object.values(modes)
  const currentMode = mode.value.name
  const index = modeValues.findIndex((i) => i.name === currentMode)
  const nextIndex = (index + 1) % modeNames.length
  mode.value = modes[modeNames[nextIndex]]
  reset()
}

function setActiveItem(index: number) {
  const len = props.urlList.length
  activeIndex.value = (index + len) % len
}

function prev() {
  if (isFirst.value && !props.infinite) return
  setActiveItem(activeIndex.value - 1)
}

function next() {
  if (isLast.value && !props.infinite) return
  setActiveItem(activeIndex.value + 1)
}
function handleDownloadClick() {
  if (currentImg.value) {
    downloadByUrl({ url: currentImg.value, target: '_blank', fileName: undefined })
  }
}
function handleActions(action: ImageViewerAction, options = {}) {
  if (loading.value) return
  const { minScale, maxScale } = props
  const { zoomRate, rotateDeg, enableTransition } = {
    zoomRate: props.zoomRate,
    rotateDeg: 90,
    enableTransition: true,
    ...options,
  }
  switch (action) {
    case 'zoomOut':
      if (transform.value.scale > minScale) {
        transform.value.scale = Number.parseFloat(
          (transform.value.scale / zoomRate).toFixed(3)
        )
      }
      break
    case 'zoomIn':
      if (transform.value.scale < maxScale) {
        transform.value.scale = Number.parseFloat(
          (transform.value.scale * zoomRate).toFixed(3)
        )
      }
      break
    case 'clockwise':
      transform.value.deg += rotateDeg
      emit('rotate', transform.value.deg)
      break
    case 'anticlockwise':
      transform.value.deg -= rotateDeg
      emit('rotate', transform.value.deg)
      break
    case 'downloadIcon':
      handleDownloadClick()
      break
  }
  transform.value.enableTransition = enableTransition
}

watch(currentImg, () => {
  nextTick(() => {
    const $img = imgRefs.value[0]
    if (!$img?.complete) {
      loading.value = true
    }
  })
})

watch(activeIndex, (val) => {
  reset()
  emit('switch', val)
})

onMounted(() => {
  registerEventListener()
  // add tabindex then wrapper can be focusable via Javascript
  // focus wrapper so arrow key can't cause inner scroll behavior underneath
  wrapper.value?.focus?.()
})

defineExpose({
  /**
   * @description manually switch image
   */
  setActiveItem,
})
</script>
<style lang="scss" scoped>
.el-image-viewer__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0
}

.el-image-viewer__btn {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: .8;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none
}

.el-image-viewer__btn .n-icon {
  font-size: inherit;
  cursor: pointer
}

.el-image-viewer__close {
  top: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  font-size: 40px
}

.el-image-viewer__canvas {
  position: static;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none
}

.el-image-viewer__actions {
  left: 50%;
  bottom: 30px;
  transform: translate(-50%);
  width: 282px;
  height: 44px;
  padding: 0 23px;
  background-color: #606266;
  border-color: #fff;
  border-radius: 22px
}

.el-image-viewer__actions__inner {
  width: 100%;
  height: 100%;
  text-align: justify;
  cursor: default;
  font-size: 23px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around
}

.el-image-viewer__prev {
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #fff;
  background-color: #606266;
  border-color: #fff
}

.el-image-viewer__next {
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  text-indent: 2px;
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #fff;
  background-color: #606266;
  border-color: #fff
}

.el-image-viewer__close {
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #fff;
  background-color: #606266;
  border-color: #fff
}

.el-image-viewer__mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: .5;
  background: #000
}
</style>
