<script lang="ts" setup>
import { reactive } from 'vue'
// import InstagramMedia from './media/instagram.vue'
// import YoutubeMedia from './media/youtube.vue'
import { SPECIAL_LINKS, links, friend_links } from './shared'
const modalState = reactive({
  wechat: false,
  wechatChannel: false
})
</script>

<template>
  <div class="about-page">
    <div class="page-banner">
      <div class="background">
        <video class="video" loop muted autoplay :controls="false"></video>
      </div>
      <div class="content">
        <div class="profile">
          <uimage class="avatar" />
          <h1 class="name">{{ '-' }}</h1>
          <p class="slogan">{{ '-' }}</p>
        </div>
        <p class="description">aaa</p>
        <div class="socials">
          <span class="normal">
            <a class="item github">
              <i class="iconfont icon-github"></i>
              <span class="text">GitHub</span>
            </a>
            <a class="item twitter">
              <i class="iconfont icon-twitter"></i>
              <span class="text">Twitter</span>
            </a>
            <a class="item instagram">
              <i class="iconfont icon-instagram"></i>
              <span class="text">Instagram</span>
            </a>
          </span>
          <span class="mini">
            <a class="item youtube">
              <i class="iconfont icon-youtube"></i>
            </a>
            <a class="item telegram">
              <i class="iconfont icon-telegram"></i>
            </a>
            <button class="item wechat">
              <i class="iconfont icon-wechat"></i>
            </button>
            <button class="item wechat-channel">
              <i class="iconfont icon-wechat-channel"></i>
            </button>
            <a class="item linkedin">
              <i class="iconfont icon-linkedin"></i>
            </a>
            <a class="item douban">
              <i class="iconfont icon-douban"></i>
            </a>
          </span>
        </div>
        <divider dashed />
        <p class="biography">222</p>
      </div>
    </div>
    <container class="page-content">
      <div class="links">
        <template :key="index" v-for="(item, index) in links">
          <component class="item" :class="item.class" :is="item.onClick ? 'button' : 'a'" :href="item.href"
            :to="item.route" @click="item.onClick">
            <span class="left">
              <i class="iconfont" :class="item.icon"></i>
              <span class="text">
                <i class="iconfont icon-next"></i>
              </span>
            </span>
            <span class="right">
              <i class="iconfont icon-next"></i>
            </span>
          </component>
        </template>
      </div>
      <div class="statistics">
      </div>
      <div class="plogs">
        <!-- <instagram-media /> -->
      </div>
      <div class="vlogs">
        <!-- <youtube-media /> -->
      </div>
      <div class="footprint">
        111111111
      </div>
      <div class="calendar">
      </div>
      <div class="footer-links">
        <div class="friendlinks">
          <template v-for="(link, index) in friend_links || []" :key="index">
            <divider type="vertical" size="lg" v-if="index !== 0" />
            <a :href="link.href" class="item" target="_blank" rel="external nofollow noopener">
              {{ link.i18n['zh'] }}
            </a>
          </template>
        </div>
        <div class="speciallinks">
          <template v-for="(item, index) in SPECIAL_LINKS" :key="index">
            <divider type="vertical" size="lg" v-if="index !== 0" />
            <a :href="item.url" class="item" target="_blank" rel="external nofollow noopener">
              {{ item.name }}
            </a>
          </template>
        </div>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables.scss';
@import 'src/assets/styles/mixins.scss';

.qrcode-modal {
  $image-size: 16rem;
  width: 23rem;
  height: 28rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.wechat {
    --item-primary: #{$wechat-primary};
  }

  &.wechat-channel {
    --item-primary: #{$wechat-channel-primary};
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45%;
    background: var(--item-primary);
  }

  .image {
    z-index: $z-index-normal + 1;
    width: $image-size;
    height: $image-size;
    margin-bottom: 2rem;
    background-color: $module-bg-opaque;
    @include radius-box($sm-radius);
  }

  .text {
    font-weight: bold;
    color: var(--item-primary);
  }
}

.about-page {
  width: 100%;
  overflow: hidden;

  .page-banner {
    $banner-height: 20rem;

    .background {
      display: block;
      position: absolute;
      width: 100%;
      height: $banner-height;
      top: 0;
      left: 0;
      overflow: hidden;
      z-index: $z-index-normal + 1;
      background-color: $module-bg-darker-1;

      &::before {
        content: '';
        position: absolute;
        display: block;
        height: 1rem;
        bottom: -0.5rem;
        left: 0;
        right: 0;
        background-image: radial-gradient(circle, transparent 70%, $text-reversal 70%);
        background-size: 0.7em 1em;
        background-position: 0 -0.5em;
      }

      .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0% 30%;
        pointer-events: none;
      }
    }

    .content {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      background-color: $module-bg;
      background-image: url('/images/page-about/background.png'),
        linear-gradient($module-bg-opaque 50%, #00000000 100%);
      background-size: contain;
      background-repeat: repeat-x;
      background-blend-mode: lighten;

      .profile {
        margin-top: 3rem;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: $z-index-normal + 2;

        .avatar {
          $size: 8rem;
          width: $size;
          height: $size;
          box-sizing: content-box;
          border: 6px solid $module-bg;
          border-radius: 100%;
          overflow: hidden;
          background-color: $module-bg;
          transition: transform $transition-time-slow;

          &:hover {
            transform: rotate(360deg);
          }
        }

        .name {
          color: $white;
          margin-top: $sm-gap;
          margin-bottom: $xs-gap;
        }

        .slogan {
          font-weight: 600;
          color: $white;
          margin: 0;
        }
      }

      .description {
        font-size: $font-size-h3;
      }

      .socials {
        $button-size: 3rem;
        display: flex;
        justify-content: center;
        height: $button-size;
        margin-bottom: $gap;

        .normal {
          display: inline-flex;
          align-items: center;
          margin-right: $gap;

          .item {
            padding: 0 $gap;
            margin-right: $gap;
            height: 100%;
            display: inline-flex;
            align-items: center;
            border-radius: $sm-radius;
            color: $white;
            transition: all $transition-time-fast;

            &:last-child {
              margin: 0;
            }

            .iconfont {
              font-size: $font-size-h4;
              margin-right: $sm-gap;
            }

            .text {
              font-weight: bold;
            }

            &.github {
              background-color: $github-primary;

              &:hover {
                background-color: $github-primary-hover;
              }
            }

            &.twitter {
              background-color: $twitter-primary;

              &:hover {
                background-color: $twitter-primary-hover;
              }
            }

            &.youtube {
              background-color: $youtube-primary;

              &:hover {
                background-color: mix($black, $youtube-primary, 8%);
              }
            }

            &.instagram {
              opacity: 0.8;
              background: $instagram-primary;
              background: $instagram-gradient;

              &:hover {
                opacity: 1;
              }
            }
          }
        }

        >.mini {
          display: flex;

          >.item {
            display: inline-block;
            width: $button-size;
            height: $button-size;
            line-height: $button-size;
            margin-right: $gap;
            text-align: center;
            border-radius: $sm-radius;
            color: $white;
            opacity: 0.8;
            transition: all $transition-time-fast;

            &:hover {
              opacity: 1;
            }

            .iconfont {
              font-size: $font-size-h4;
            }

            &.wechat {
              background-color: $wechat-primary;
            }

            &.wechat-channel {
              background-color: $wechat-channel-primary;
            }

            &.youtube {
              background-color: $youtube-primary;
            }

            &.telegram {
              background-color: $telegram-primary;
            }

            &.douban {
              background-color: $douban-primary;
            }

            &.stackoverflow {
              background-color: $stackoverflow-primary;
            }

            &.algorithm {
              background-color: $leetcode-primary;
            }

            &.linkedin {
              background-color: $linkedin-primary;
            }
          }
        }
      }

      .biography {
        width: $container-width;
        margin-bottom: $lg-gap;
        padding: 0 $xs-gap;
        text-indent: 2em;
        line-height: $line-height-base * 1.9;
        font-weight: 600;
        color: $text-secondary;
      }
    }
  }

  .page-content {
    margin: $gap * 2 0;
  }

  .links {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: $gap * 2;
    width: 100%;
    margin-bottom: 2rem;

    .item {
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1em 0 2em;
      @include common-bg-module($transition-time-fast);
      @include radius-box($lg-radius);

      &.discord {
        --item-primary: #{$discord-primary};
        --item-hover: white;
      }

      &.telegram {
        --item-primary: #{$telegram-primary};
        --item-hover: white;
      }

      &.sponsor {
        --item-primary: #{$red};
        --item-hover: white;
      }

      &.statement {
        --item-primary: #{$surmon};
        --item-hover: white;
      }

      &.rss {
        --item-primary: #{$rss-primary};
        --item-hover: white;
      }

      &:hover {
        background-color: var(--item-primary, $primary);

        .left {

          .iconfont,
          .text {
            color: var(--item-hover, $text-reversal);
          }
        }

        .right {
          opacity: 1;
          transform: translateX(-$sm-gap);
          color: var(--item-hover, $text-reversal);
        }
      }

      .left {
        .iconfont {
          font-size: $font-size-h3;
          margin-right: 0.8em;
          color: var(--item-primary, $primary);
        }

        .text {
          letter-spacing: 1px;
          color: $text-secondary;
          font-size: $font-size-h4;
          font-weight: bold;
        }
      }

      .right {
        color: $text-divider;
        opacity: 0.4;
        transition:
          opacity $transition-time-fast,
          transform $transition-time-normal;
      }
    }
  }

  .statistics {
    margin-bottom: $gap * 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: $gap * 2;
  }

  .plogs,
  .vlogs,
  .calendar {
    margin-bottom: $gap * 2;
    border-radius: $lg-radius;
    padding: $gap;
    @include common-bg-module();
  }

  .footprint {
    width: 100%;
    margin-bottom: $gap * 2;
  }

  .footer-links {
    display: flex;
    justify-content: space-between;
    padding: 2rem $lg-gap;
    @include common-bg-module();
    @include radius-box($lg-radius);

    .item {
      font-weight: bold;
      @include text-underline();
    }

    .speciallinks {
      .item {
        color: $text-disabled;

        &:hover {
          color: $text;
        }
      }
    }
  }
}
</style>
