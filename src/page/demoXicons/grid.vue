<template>
  <VirtualList ref="listRef" :items="filteredPacks" :itemSize="34" :itemResizable="true" :itemsStyle="contentStyle"
    :paddingTop="16" :paddingBottom="24" :onResize="handleVirtualListResize" :onScroll="handleVirtualListScroll">
    <template #default="{ item, index }">
      <div style="height: 64px; display: flex; flex-wrap: nowrap; padding-bottom: 16px;">
        <template v-for="(icon, i) in item" :key="`${index}_${i}`">
          <Icon :iconItem="icon" :index="i" :parendIndex="index" :getIconComponet="getIconComponet" />
        </template>
      </div>
    </template>
  </VirtualList>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VirtualList } from 'vueuc'
import { useBreakpoints, useMemo } from 'vooks'
import { dataClass } from './data'
import Icon from './Icon.vue'
defineOptions({
  name: 'Grid',
  inheritAttrs: false,
})

dataClass.init();
const breakpointsRef = useBreakpoints()
const packSizeRef = useMemo(() => {
  const breakpoints = breakpointsRef.value
  if (breakpoints.includes('l')) return 5
  if (breakpoints.includes('m')) return 4
  if (breakpoints.includes('s')) return 3
  if (breakpoints.includes('xs')) return 2
  return 1
})
const contentStyle = { minWidth: '100%' }
const sumData = ref<Array<any>>([])
sumData.value = dataClass.setV2S(dataClass.getAntdList(), packSizeRef.value);
const filteredPacks = computed(() => {
  // return pack(iconSets[displayedSetKeyRef.value].filter((iconInfo) => {
  //   return iconInfo[2].toLowerCase().includes(patternRef.value.toLowerCase())
  // }), packSizeRef.value)
  return dataClass.setV2S(dataClass.getAntdList(), packSizeRef.value)
})
console.log("randomHeightData:", sumData.value, filteredPacks)
function getIconComponet(name) {
  return dataClass.getMapAntd(name)
}
function handleVirtualListResize(e: ResizeObserverEntry): void {
  sumData.value = dataClass.setV2S(dataClass.getAntdList(), packSizeRef.value);
  console.log("handleVirtualListResize ResizeObserverEntry: 222", e, packSizeRef.value, filteredPacks, sumData.value)
}
function handleVirtualListScroll(e: Event): void {
  console.log("handleVirtualListScroll Event:", e)
}
</script>

<style lang="scss" scoped>
.empty {
  text-align: center;
  font-size: 16px;
  margin: 36px auto auto
}
</style>
