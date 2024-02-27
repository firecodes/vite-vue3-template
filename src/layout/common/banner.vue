<template>
  <div class="banner" :class="{ mobile: isMobile }">
    <div class="background" :style="backgroundImageStyle">
      <video v-if="videoSource" class="video" loop muted autoplay :controls="false"
        :style="{ objectPosition: `0% ${props.videoPosition}%` }" :src="videoSource"></video>
    </div>
    <div class="content" :class="{ blur: Boolean(blur) }" :style="{ '--blur': `${blur}px` }">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
      <div class="description">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { CSSProperties } from 'vue';

interface Props {
  image?: string;
  imagePosition?: number;
  video?: string;
  videoPosition?: number;
  blur?: number;
  cdn?: boolean;
  isMobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  imagePosition: 20,
  videoPosition: 48,
  blur: 0,
  cdn: false,
  isMobile: false,
});

const backgroundImage = computed(() => {
  return props.image;
});

const backgroundImageStyle = computed<CSSProperties>(() => {
  if (!backgroundImage.value) {
    return {};
  }
  return {
    backgroundImage: `url(${backgroundImage.value})`,
    backgroundPositionY: `${props.imagePosition}%`,
  };
});
const videoSource = computed(() => {
  return props.video;
});
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/variables.scss';
@import 'src/assets/styles/mixins.scss';

.banner {
  position: relative;
  height: $full-column-page-banner-height;
  z-index: $z-index-normal;

  .background {
    position: absolute;
    z-index: $z-index-underground;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $module-bg-darker-1;
    background-size: cover;
    background-position-x: center;

    &.dark {
      filter: brightness(0.8);
    }

    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: $white;

    &.blur {
      @include backdrop-blur(var(--blur));
    }

    .title {
      font-size: 3em;
      margin-top: 0;
      margin-bottom: $lg-gap * 2;
    }

    .description {
      font-size: $font-size-h4;
      font-weight: bold;
    }
  }

  &.mobile {
    height: $mobile-banner-height;
    margin-top: -$lg-gap;
    margin-left: -$gap;
    margin-right: -$gap;

    .title {
      font-size: 2em;
    }
  }
}
</style>