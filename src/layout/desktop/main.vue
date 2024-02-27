<script lang="ts" setup>
import { onMounted } from 'vue'
import HeaderView from './header.vue'
import FooterView from './footer.vue'

onMounted(() => { })
</script>

<template>
  <div class="desktop-main">
    <header-view />
    <main class="main-container full-page">
      <div class="main-view">
        <router-view v-slot="{ Component, route: r }">
          <div class="router-view">
            <transition name="page" mode="out-in">
              <component :is="Component" :key="r.name" />
            </transition>
          </div>
        </router-view>
      </div>
    </main>
    <footer-view class="footer-view" />
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables.scss';
@import 'src/assets/styles/mixins.scss';

.desktop-main {
  padding-top: $header-height + $lg-gap;

  @media screen and (max-width: 1200px) {

    #theme,
    #language,
    .main-share {
      display: none !important;
    }
  }

  .main-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: $container-width;

    &.full-page {
      width: 100%;
    }

    .nav-view {
      order: 1;
      flex-shrink: 0;
      margin-right: $lg-gap;
    }

    .aside-view {
      order: 3;
      flex-shrink: 0;
      margin-left: $lg-gap;
    }

    .main-view {
      order: 2;
      flex-grow: 1;
      position: relative;
      overflow: hidden;
      transition: none;

      &:-moz-full-screen {
        overflow-y: auto;
      }

      &:-webkit-full-screen {
        overflow-y: auto;
      }

      &:fullscreen {
        overflow-y: auto;
      }

      &.layout-normal {
        /* flex-grow: 1; */
      }

      &.layout-wide {
        flex-grow: unset;
        width: 100%;
        margin: 0;
      }

      &.layout-full {
        flex-grow: unset;
        width: 100%;
        margin: -$lg-gap 0;
      }
    }
  }

  .footer-view {
    margin-top: $lg-gap;
  }
}
</style>
