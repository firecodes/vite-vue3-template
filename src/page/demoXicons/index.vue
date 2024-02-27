<template>
  <div class="card-page">
    <navMenu />
    <tab :value="displayedSetKey" :options="options" @onValueChange="onValueChange" />
    <gridList />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import navMenu from './navMenu.vue'
import tab from './tab.vue'
import gridList from './grid.vue'

let tabMap = {
  all: [],
  fluent: [],
  ionicons4: [],
  ionicons5: [],
  antd: [],
  fa: [],
  material: [],
  tabler: [],
  carbon: []
}
const displayedSetKey = ref(String)
const options = ref<Array<any>>([])
options.value = Object.keys(tabMap)
displayedSetKey.value = options.value[0]

function onValueChange(value) {
  displayedSetKey.value = value
}
</script>


<style lang="scss">
body {
  --tab-x1-height: 80px;
  --nav-height: 64px;
  --tab-height: 32px;
  font-size: 14px;
  margin: 0;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol;
  color: gray;
  background-color: #f8f8f8
}

.v-vl {
  height: calc(100vh - var(--tab-x1-height) - var(--nav-height) - var(--tab-height));
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;
  max-width: 1968px;
  margin: auto
}
</style>
