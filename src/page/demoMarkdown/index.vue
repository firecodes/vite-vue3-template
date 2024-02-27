<template>
  <div class="card-page">
    <markdown :html="defaultContent" />
    <!-- <markdown class="content" :plain="true" :markdown="markdownComent" /> -->
    <markdown :markdown="markdownComent" :compact="true" :render-options="{ sanitize: true }" />
    <!--<markdown :markdown="defaultContent" :compact="true" :render-options="{ sanitize: true }" /> -->
    <template v-for="(item, index) in markdownComentList" :key="index">
      <markdown :markdown="item.content" :compact="true" :render-options="{ sanitize: true }" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'
import { dataClass } from './data'

const htmlComent = ref<string>()
const markdownComent = ref<string>()
const markdownComentList = ref<Array<any>>([])
const element = ref<HTMLDivElement>()
const defaultContent = computed(() => {
  return htmlComent.value
})
nextTick(() => {
  htmlComent.value = 'computed, nextTick, shallowRef, shallowReactive, computed, onBeforeMount'
  markdownComent.value = dataClass.getData()
  markdownComentList.value = dataClass.getDataMarkdown()
})
</script>

<style lang="scss" scoped></style>
