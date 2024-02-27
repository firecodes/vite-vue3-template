<template>
  <div ref="root" class="icon-wrapper">
    <template v-if="getIcon.name">
      <div class="icon" title="Click to download SVG" @click="downLoadFile">
        <component ref="ComponentRef" :is="getIconBlock()" />
      </div>
      <div class="icon-info">
        <div class="icon-name">{{ getIcon.name }}</div>
        <div class="icon-action">
          <div class="icon-action-button" @click="CopySVG">Copy SVG</div>
          <div class="icon-action-button" @click="CopyName">Copy Name</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref, unref, getCurrentInstance, markRaw, computed } from 'vue'
import * as utils from "@/utils"

defineOptions({
  name: 'Icon',
  inheritAttrs: false,
})

const props = defineProps<{
  iconItem: Object,
  getIconComponet: Function
}>()
const getIcon = computed(() => {
  return props.iconItem
})
function getBlockIconComponent() {
  if (!getIcon.value?.name) { return "" }
  return props.getIconComponet?.(getIcon.value?.name)
}
function getIconBlock() {
  if (!getIcon.value?.name) { return "" }
  // 执行图标报错
  // return utils.renderIcon(markRaw(props.iconItem))
  // return markRaw(props.iconItem)
  // return  utils.renderfontsvg(props.icon)
  // 执行图标正确
  // return getBlockIconComponent()
  // return markRaw(getBlockIconComponent())
  // return utils.renderIcon(getBlockIconComponent())
  return utils.renderIcon(markRaw(getBlockIconComponent()))
}
let vm = getCurrentInstance()
// let $componentRef = ref<ComponentRef>(null);
// let $rootRef = ref<HTMLDivElement>();
// let $unroot = unref($rootRef);
// let $uncomponentRef = unref($componentRef);
console.log("Icon.vue:", vm, getBlockIconComponent())

function downLoadFile() {
  let $el = vm?.proxy?.$el.querySelector("svg")
  let c = document.createElement("a");
  c.download = `${getIcon.value?.name}.svg`
  c.href = URL.createObjectURL(new Blob([$el.outerHTML]))
  c.click()
  URL.revokeObjectURL(c.href)
}
let CopySVG = () => {
  let $el = vm?.proxy?.$el.querySelector("svg")
  navigator.clipboard.writeText($el.outerHTML)
}
let CopyName = () => {
  navigator.clipboard.writeText(getIcon.value?.name)
}
</script>

<style lang="scss" scoped>
.icon-wrapper {
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 16px;
  overflow: hidden
}

.icon-wrapper:empty {
  background-color: transparent
}

.icon-wrapper:not(:first-child) {
  margin-left: 16px
}

.icon {
  color: #303030;
  width: 1em;
  height: 1em;
  display: inline-flex;
  cursor: pointer;
  font-size: 32px
}

.icon-info {
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  align-self: stretch;
  margin-left: 8px;
  font-size: 13px;
  overflow: hidden;
  display: flex;
  align-items: center
}

.icon-name {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: transform .3s cubic-bezier(.4, 0, .2, 1)
}

.icon-action {
  position: absolute;
  top: calc(50% + 10px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s cubic-bezier(.4, 0, .2, 1), transform .3s cubic-bezier(.4, 0, .2, 1)
}

.icon-wrapper:hover .icon-action {
  transform: translateY(-9px);
  opacity: 1
}

.icon-wrapper:hover .icon-name,
.icon-wrapper:hover .icon-ns {
  transform: translateY(-9px)
}

.icon-wrapper.show-ns .icon-action,
.icon-wrapper.show-ns .icon-name,
.icon-wrapper.show-ns .icon-ns {
  transform: translateY(5px)
}

.icon-wrapper.show-ns:hover .icon-action {
  transform: translateY(-5px);
  opacity: 1
}

.icon-wrapper.show-ns:hover .icon-name,
.icon-wrapper.show-ns:hover .icon-ns {
  transform: translateY(-5px)
}

.icon-action-button {
  display: inline-block;
  pointer-events: all;
  cursor: pointer;
  color: #606060
}

.icon-action-button:not(:first-child) {
  margin-left: 8px
}

.icon-ns {
  color: #a0a0a0;
  font-size: 12px;
  position: absolute;
  left: 0;
  top: 10px;
  transition: transform .3s cubic-bezier(.4, 0, .2, 1)
}

.icon svg {
  width: 1em;
  height: 1em
}

.icon svg:not([fill]) {
  fill: currentColor
}

.v-vl {
  height: calc(100vh - var(--nav-height) - var(--tab-height));
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;
  max-width: 1968px;
  margin: auto
}

.empty {
  text-align: center;
  font-size: 16px;
  margin: 36px auto auto
}
</style>
