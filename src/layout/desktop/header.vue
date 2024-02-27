<script lang="ts" setup>
import { computed } from 'vue'
import { menus } from './menu'
const themeIcon = computed(() => {
  return 'icon-sun'
})
const toggleTheme = () => { }
const tooggleLanguage = () => { }
const handleRootNavEvent = () => { }
</script>

<template>
  <header class="header" :class="{ 'enable-nav': true }">
    <div class="header-container container">
      <div class="header-header">
        <span class="webfont medium zh boldEn header-slogan">PLUS Logo</span>
        <router-link to="/" class="header-link" @mousedown="handleRootNavEvent" />
      </div>
      <div class="toolbox">
        <button class="button menu">
          <i class="iconfont icon-top-menu"></i>
        </button>
        <button class="button language" title="Switch language" @click="tooggleLanguage">
          {{ '中文' || '-' }}
        </button>
        <button class="button theme" @click="toggleTheme">
          <i class="iconfont" :class="themeIcon"></i>
        </button>
      </div>
    </div>
    <div class="header-nav">
      <div class="nav-list container">
        <template v-for="(menu, index) in menus" :key="menu.id">
          <span v-if="index > 0" class="divider"></span>
          <a class="item" :class="menu.id" :to="menu.route" :href="menu.route">
            <img v-if="menu.imageIcon" class="image-icon" :src="menu.imageIcon" />
            <i v-else-if="menu.icon" class="font-icon iconfont" :class="menu.icon"></i>
            {{ menu.i18nKey }}
            <span v-if="menu.hot" class="superscript">
              <i class="iconfont icon-hot-fill"></i>
            </span>
            <span v-if="menu.newWindow" class="new-window">
              <i class="iconfont icon-new-window-s"></i>
            </span>
          </a>
        </template>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables.scss';
@import 'src/assets/styles/mixins.scss';

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  z-index: $z-index-header;
  background-color: $module-bg;
  border-bottom: 1px solid $module-bg-darker-2;
  @include backdrop-blur(5px);

  &.enable-nav:hover {
    .header-nav {
      @include visible();
    }
  }

  .header-container {
    height: 100%;
    display: flex;
    justify-content: space-between;

    .header-header {
      height: 100%;
      display: flex;
      position: relative;
      align-items: center;
      padding-left: $sm-gap;
      width: 29em;
      overflow: hidden;

      @keyframes logo-blink {
        0% {
          mask-position: -30%;
        }

        100% {
          mask-position: 666%;
        }
      }

      .header-logo {
        width: 11rem;
        margin-right: $gap * 4;
        filter: $theme-logo-rotate;

        .logo-st {
          fill: $primary;
        }
      }

      .header-slogan {
        color: $primary;
        font-size: $font-size-h5;
      }

      .header-link {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    .toolbox {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      opacity: 0.6;
      @include visibility-transition();

      &:hover {
        opacity: 1;
      }

      .button {
        position: relative;
        display: block;
        text-transform: uppercase;
        margin: 0 $gap;
        width: 2rem;
        height: 2rem;

        &.menu {
          cursor: none;
        }

        &.language {
          font-weight: bold;
        }
      }
    }
  }

  .header-nav {
    width: 100%;
    height: 4rem;
    background-color: $primary-lighter;
    @include hidden();
    @include visibility-transition();

    .nav-list {
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .divider {
        height: 6px;
        width: 1px;
        background-color: $module-bg-translucent;
      }

      .item {
        position: relative;
        display: inline-flex;
        align-items: center;
        color: $text-reversal;
        opacity: 0.7;
        @include visibility-transition();

        &:hover {
          opacity: 1;
        }

        &.link-active {
          .text {
            padding-top: 4px;
            padding-bottom: 2px;
            border-bottom: 2px solid;
          }
        }

        .font-icon {
          margin-right: $sm-gap;
        }

        .image-icon {
          width: 1em;
          height: 1em;
          margin-right: $sm-gap;
          border-radius: $xs-radius;
        }

        .superscript {
          margin-left: $xs-gap;
        }

        .new-window {
          margin-left: $xs-gap;
          margin-right: -$xs-gap;
          margin-top: -$sm-gap;
          font-size: $font-size-small - 3;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
