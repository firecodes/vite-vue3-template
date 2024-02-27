<template>
  <x-scroll>
    <div class="tab">
      <template v-for="(val) in options" :key="val">
        <div class="tab-item" :class="{ 'tab-item--active': val === value }" @click="onHanderClick(val)">
          {{ val }}
        </div>
      </template>
    </div>
  </x-scroll>
</template>
<script lang="ts" setup>
import { XScroll } from 'vueuc'
// import { ref, shallowRef, shallowReactive, computed, onBeforeMount } from 'vue'
defineOptions({
  name: 'Tab',
  inheritAttrs: false,
})
defineProps<{
  value: String,
  options: Array<String>
}>()
const emit = defineEmits({
  onValueChange: (val: String) => { return val }
})
function onHanderClick(val) {
  emit('onValueChange', val)
}
</script>

<style lang="scss" scoped>
.tab {
  background: #FFF;
  height: var(--tab-height);
  display: inline-flex;
  min-width: 100%;
  align-items: stretch;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, .08)
}

.tab .tab-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid transparent;
  flex-shrink: 0;
  padding: 0 16px
}

.tab .tab-item:not(:last-child) {
  margin-right: 12px
}

.tab .tab-item.tab-item--active {
  font-weight: 500;
  color: #303030;
  border-bottom: 2px solid #303030
}
</style>
