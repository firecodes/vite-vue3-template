<script lang="ts" setup>
defineProps<{
  medias: Array<any>
}>()
</script>

<template>
  <div class="list-grid">
    <ul class="medias">
      <li class="item" v-for="(media, index) in medias" :key="index">
        <div class="content">
          <div v-lozad class="background" :data-background-image="media.maxSrc"></div>
          <div class="mask">
            <span class="icon">
              <i class="iconfont icon-music-play"></i>
              <i class="iconfont icon-camera">{{ index }}</i>
            </span>
          </div>
          <div class="type-icon">
            <i class="iconfont icon-camera"></i>
          </div>
          <span class="date">
            <i class="iconfont icon-camera">{{ index }}</i>
          </span>
        </div>
      </li>
    </ul>
    <!-- <client-only>
      <popup :visible="!!galleryActiveMedia" :scroll-close="false" @close="closeMediaGallery">
        <ins-gallery
          v-if="galleryActiveMedia"
          :media="galleryActiveMedia"
          :index="galleryActiveIndex!"
          :count="medias.length"
        />
      </popup>
    </client-only> -->
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables.scss';
@import 'src/assets/styles/mixins.scss';
$size: 280px;

.medias {
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: $gap * 5;
  list-style: none;

  .item {
    display: block;
    padding: 1rem;
    background-color: aliceblue;
    @include radius-box($xs-radius);

    .content {
      position: relative;
      height: $size;
      cursor: pointer;

      &:hover {
        .mask {
          @include visible();
        }
      }

      .background {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-color: $module-bg-darker-1;
      }

      .type-icon {
        opacity: 0.8;
        position: absolute;
        top: $xs-gap;
        right: $sm-gap;
        font-size: $font-size-h4;
        color: $white;
      }

      .date {
        opacity: 0.8;
        position: absolute;
        bottom: $sm-gap;
        left: $gap;
        color: $white;
        font-size: $font-size-root;
        font-weight: bold;
        letter-spacing: 1px;
      }

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: $z-index-normal + 1;
        background-color: rgba(#000, 0.3);
        color: rgba($white, 0.8);
        @include hidden();
        @include visibility-transition();

        .icon {
          font-size: 2em;
        }
      }
    }
  }
}
</style>
