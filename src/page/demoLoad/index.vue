<template>
  <div class="photography-page">
    <page-banner class="page-banner" :video="videosValue" :video-position="68">
      <template #title>
        <span>大千同在，万象共栖</span>
      </template>
      <template #description>
        <span>在我的 Instagram 主页查看更多</span>
      </template>
    </page-banner>
    <!-- <container class="page-bridge" /> -->
    <container class="page-content">
      <placeholder :taskData="taskMap?.data" :data="taskMap?.data?.data" :loading="taskMap?.fetching">
        <template #placeholder>
          <h2>空数据</h2>
        </template>
        <template #loading>
          <div key="loading" class="module-loading">
            <div class="item" v-for="item in 4 * 2" :key="item">
            </div>
            <h2>loading</h2>
          </div>
        </template>
        <template #default>
          <div>
            <gridList :medias="allMedias" />
            <loadmore v-if="!taskMap.fetching && !finished" class="loadmore" :loading="loading"
              @loadmore="fetchMoreMedias">
              <template #normal>
                <button class="normal" @click="fetchMoreMedias">
                  <i class="iconfont icon-loadmore"></i>
                </button>
              </template>
              <template #loading>
                <h2>loading</h2>
              </template>
            </loadmore>
          </div>
        </template>
      </placeholder>
    </container>
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef, shallowReactive, computed, onBeforeMount } from 'vue'
import pageBanner from '@/layout/common/banner.vue';
import videosValue from '@/assets/videos/ocean-4.mp4';
import useFetchStore from '@/store/fetch/index';
import * as taskMapApi from '@/api/task/taskMap';
import gridList from './grid.vue'
const { taskMap } = useFetchStore()
console.log("fetchStores", taskMap, useFetchStore())

const loading = ref(false)
const medias = shallowReactive<Array<any>>([])
const lastPaging = shallowRef<taskMapApi.TaskDataResponse | null>(null)
const finished = computed(() => Boolean(lastPaging.value && !lastPaging.value?.paging?.next))
const allMedias = computed(() => {
  const timeline = taskMap?.data?.data ?? []
  return [...timeline, ...medias]
})
const fetchMoreMedias = async () => {
  try {
    loading.value = true
    const response = await taskMapApi.getMediasList({
      after: lastPaging.value?.paging?.cursors?.after ?? taskMap?.data?.paging?.cursors.after,
      since: allMedias.value.length
    })
    medias.push(...response.data)
    lastPaging.value = response
  } finally {
    loading.value = false
  }
}

onBeforeMount(() => taskMap.fetch())
</script>


<style lang="scss" scoped>
@import 'src/assets/styles/variables.scss';
@import 'src/assets/styles/mixins.scss';

.card-page {
  min-height: $full-page-active-content-height;

  .page-banner {
    .link {
      color: $white;
      text-decoration: underline;
    }
  }

  .page-bridge {
    position: relative;
    height: 2rem;
    background: linear-gradient(to right, transparent, $module-bg-opaque, transparent);
  }

  .page-content {
    margin: 3rem 0;

    .loadmore {
      margin-top: 4rem;
      color: $text-disabled;

      .normal {
        font-size: $font-size-h1;
      }

      .loading {
        margin: $sm-gap 0;
      }
    }
  }

  .module-loading {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: $gap * 5;

    .item {
      padding: $lg-gap;
      height: 21rem;
      @include radius-box($xs-radius);
      @include common-bg-module();
    }
  }

  .module-empty {
    font-weight: bold;
    font-size: $font-size-h3;
  }
}
</style>
