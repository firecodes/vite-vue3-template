<template>
  <div ref="container" :class="[ns.b(), $attrs.class]" :style="containerStyle">
    <slot v-if="hasLoadError" name="error">
      <div :class="ns.e('error')">加载错误</div>
    </slot>
    <template v-else>
      <img v-if="imageSrc !== undefined" :src="imageSrc" :loading="loading" :style="imageStyle" :class="imageKls"
        @click="clickHandler" @load="handleLoad" @error="handleError" />
      <div v-if="isLoading" :class="ns.e('wrapper')">
        <slot name="placeholder">
          <div :class="ns.e('placeholder')"></div>
        </slot>
      </div>
    </template>
    <template v-if="preview">
      <image-viewer v-if="showViewer" :z-index="zIndex" :initial-index="imageIndex" :infinite="infinite"
        :zoom-rate="zoomRate" :min-scale="minScale" :max-scale="maxScale" :url-list="previewSrcList"
        :hide-on-click-modal="hideOnClickModal" :teleported="previewTeleported"
        :close-on-press-escape="closeOnPressEscape" @close="closeViewer" @switch="switchViewer">
        <div v-if="$slots.viewer">
          <slot name="viewer"></slot>
        </div>
      </image-viewer>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, useAttrs as useRawAttrs, watch } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { useNamespace } from '../hooks'
import { getScrollContainer, isClient, isElement, isInContainer, isString, } from '../utils'
import { imageEmits, imageProps } from './image'
import ImageViewer from '../image-viewer/image-viewer.vue'

import type { CSSProperties, StyleValue } from 'vue'

defineOptions({
  name: 'ElImage',
  inheritAttrs: false,
})

const props = defineProps(imageProps)
const emit = defineEmits(imageEmits)

let prevOverflow = ''

const ns = useNamespace('image')
const rawAttrs = useRawAttrs()
// const attrs = useAttrs()

const imageSrc = ref<string | undefined>()
const hasLoadError = ref(false)
const isLoading = ref(true)
const showViewer = ref(false)
const container = ref<HTMLElement>()
const _scrollContainer = ref<HTMLElement | Window>()

const supportLoading = isClient && 'loading' in HTMLImageElement.prototype
let stopScrollListener: (() => void) | undefined
let stopWheelListener: (() => void) | undefined

const imageKls = computed(() => [
  ns.e('inner'),
  preview.value && ns.e('preview'),
  isLoading.value && ns.is('loading'),
])

const containerStyle = computed(() => rawAttrs.style as StyleValue)

const imageStyle = computed<CSSProperties>(() => {
  const { fit } = props
  if (isClient && fit) {
    return { objectFit: fit }
  }
  return {}
})

const preview = computed(() => {
  const { previewSrcList } = props
  return Array.isArray(previewSrcList) && previewSrcList.length > 0
})

const imageIndex = computed(() => {
  const { previewSrcList, initialIndex } = props
  let previewIndex = initialIndex
  if (initialIndex > previewSrcList.length - 1) {
    previewIndex = 0
  }
  return previewIndex
})

const isManual = computed(() => {
  if (props.loading === 'eager') return false
  return (!supportLoading && props.loading === 'lazy') || props.lazy
})

const loadImage = () => {
  if (!isClient) return

  // reset status
  isLoading.value = true
  hasLoadError.value = false
  imageSrc.value = props.src
}

function handleLoad(event: Event) {
  isLoading.value = false
  hasLoadError.value = false
  emit('load', event)
}

function handleError(event: Event) {
  isLoading.value = false
  hasLoadError.value = true
  emit('error', event)
}

function handleLazyLoad() {
  if (isInContainer(container.value, _scrollContainer.value)) {
    loadImage()
    removeLazyLoadListener()
  }
}

const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200, true)

async function addLazyLoadListener() {
  if (!isClient) return

  await nextTick()

  const { scrollContainer } = props
  if (isElement(scrollContainer)) {
    _scrollContainer.value = scrollContainer
  } else if (isString(scrollContainer) && scrollContainer !== '') {
    _scrollContainer.value =
      document.querySelector<HTMLElement>(scrollContainer) ?? undefined
  } else if (container.value) {
    _scrollContainer.value = getScrollContainer(container.value)
  }

  if (_scrollContainer.value) {
    stopScrollListener = useEventListener(
      _scrollContainer,
      'scroll',
      lazyLoadHandler
    )
    setTimeout(() => handleLazyLoad(), 100)
  }
}

function removeLazyLoadListener() {
  if (!isClient || !_scrollContainer.value || !lazyLoadHandler) return

  stopScrollListener?.()
  _scrollContainer.value = undefined
}

function wheelHandler(e: WheelEvent) {
  if (!e.ctrlKey) return

  if (e.deltaY < 0) {
    e.preventDefault()
    return false
  } else if (e.deltaY > 0) {
    e.preventDefault()
    return false
  }
}

function clickHandler() {
  // don't show viewer when preview is false
  if (!preview.value) return

  stopWheelListener = useEventListener('wheel', wheelHandler, {
    passive: false,
  })

  // prevent body scroll
  prevOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  showViewer.value = true
  emit('show')
}

function closeViewer() {
  stopWheelListener?.()
  document.body.style.overflow = prevOverflow
  showViewer.value = false
  emit('close')
}

function switchViewer(val: number) {
  emit('switch', val)
}

watch(
  () => props.src,
  () => {
    if (isManual.value) {
      // reset status
      isLoading.value = true
      hasLoadError.value = false
      removeLazyLoadListener()
      addLazyLoadListener()
    } else {
      loadImage()
    }
  }
)

onMounted(() => {
  if (isManual.value) {
    addLazyLoadListener()
  } else {
    loadImage()
  }
})
</script>
<style lang="scss" scoped>
.el-image__error,
.el-image__placeholder,
.el-image__wrapper,
.el-image__inner {
  width: 100%;
  height: 100%
}

.el-image {
  position: relative;
  display: inline-block;
  overflow: hidden
}

.el-image__inner {
  vertical-align: top;
  opacity: 1
}

.el-image__inner.is-loading {
  opacity: 0
}

.el-image__wrapper {
  position: absolute;
  top: 0;
  left: 0
}

.el-image__placeholder {
  background: var(--el-fill-color-light)
}

.el-image__error {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-placeholder);
  vertical-align: middle
}

.el-image__preview {
  cursor: pointer
}
</style>
