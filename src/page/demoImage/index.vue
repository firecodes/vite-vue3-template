<template>
  <div class="card-page">
    <container class="page-bridge-img">
      <div class="demo-image">
        <n-icon size="100" color="#18a058">
          <LeftOutlined />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <RightOutlined />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <ZoomInOutlined />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <ZoomOutOutlined />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <ExpandOutlined />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <OneToOneOutlined />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <UndoOutlined style="transform: scale(1) rotate(120deg) translate(0px, 0px);" />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <RedoOutlined style="transform: scale(1) rotate(-120deg) translate(0px, 0px);" />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <DownloadOutlined />
        </n-icon>
        <n-icon size="100" color="#18a058">
          <CloseOutlined />
        </n-icon>
      </div>
    </container>
    <container class="page-bridge-img">
      <el-image style="width: 200px; height: 150px" :src="url" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
        :preview-src-list="srcList" :initial-index="4" fit="cover" />
      <span> 点击查图片看大图</span>
    </container>
    <container class="page-bridge-img">
      <div class="demo-image">
        <div v-for="fit in allFits" :key="fit" class="block">
          <span class="demonstration">{{ fit }}</span>
          <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
        </div>
      </div>
    </container>

    <container class="page-bridge-img">
      <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy />
      </div>
    </container>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import {
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,

  ExpandOutlined,
  OneToOneOutlined,

  UndoOutlined,
  RedoOutlined,

  DownloadOutlined,
  CloseOutlined
} from '@vicons/antd';

const allFits = computed(() => {
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
  return fits
})
const url = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')

const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
</script>


<style lang="scss" scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block !important;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}

.demo-image .block:last-child {
  border-right: none;
}

.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}

.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}

.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}

.demo-image__error .image-slot {
  font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}

.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
