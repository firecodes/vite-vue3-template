<script lang="ts" setup>
defineOptions({
  name: 'NavMenu',
  inheritAttrs: false,
})
// defineProps<{
//   medias: Array<any>
// }>()
</script>

<template>
  <div class="nav-container">
    <div class="nav-prefix">
      <svg viewBox="0 0 247 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo">
        <path
          d="M43.5409 60L28.3409 38.72L42.8209 18.64H30.5009L22.1809 30.16L13.9409 18.64H1.30094L15.8609 38.96L0.660938 60H12.9809L22.0209 47.52L30.9809 60H43.5409ZM55.7334 12.96C59.1734 12.96 61.9734 10.08 61.9734 6.56C61.9734 3.28 59.1734 0.319996 55.7334 0.319996C52.1334 0.319996 49.3334 3.28 49.3334 6.56C49.3334 10.08 52.1334 12.96 55.7334 12.96ZM49.8134 60H61.4934V18.64H49.8134V60ZM91.9303 60.96C98.8103 60.96 104.41 58.16 108.49 53.68L100.73 47.12C98.5703 49.52 95.2103 51.12 92.0103 51.12C85.8503 51.12 80.7303 45.68 80.7303 39.2C80.7303 32.88 85.8503 27.52 91.9303 27.52C95.1303 27.52 98.4103 29.04 100.49 31.36L108.25 24.72C104.25 20.4 98.7303 17.68 92.0103 17.68C79.7703 17.68 69.3703 27.52 69.3703 39.28C69.3703 51.04 79.6903 60.96 91.9303 60.96ZM134.979 60.96C147.219 60.96 157.459 51.04 157.459 39.28C157.459 27.52 147.219 17.68 134.979 17.68C122.659 17.68 112.339 27.52 112.339 39.28C112.339 51.04 122.659 60.96 134.979 60.96ZM134.979 51.12C128.739 51.12 123.539 45.68 123.539 39.28C123.539 32.88 128.739 27.52 134.979 27.52C141.139 27.52 146.339 32.88 146.339 39.28C146.339 45.68 141.139 51.12 134.979 51.12ZM189.282 17.68C183.922 17.68 179.282 20.08 176.802 23.84V18.64H165.122V60H176.802V35.28L176.882 35.52C176.882 31.04 180.642 27.52 185.522 27.52C190.162 27.52 193.362 31.04 193.362 36.16V60H204.642V33.68C204.642 24.32 198.242 17.68 189.282 17.68ZM230.023 60.96C240.183 60.96 246.823 55.76 246.823 47.6C246.823 38.56 238.903 36.16 231.783 34.32C226.183 32.8 224.503 32.16 224.503 29.92C224.503 28.48 226.503 27.44 229.383 27.44C232.903 27.44 237.223 28.8 240.983 31.12L245.703 22.8C241.143 19.76 235.303 17.68 229.383 17.68C219.623 17.68 213.143 23.28 213.223 31.12C213.303 39.28 219.863 41.6 228.343 43.68C232.583 44.8 235.623 45.6 235.623 48.16C235.623 50 233.383 51.28 230.263 51.28C224.743 51.28 220.103 49.28 216.423 46.64L211.383 54.72C216.343 58.72 223.383 60.96 230.023 60.96Z"
          fill="#303030" />
      </svg>
    </div>
    <div class="nav-main"><input placeholder="Search Icons" class="search" /></div>
    <div class="nav-suffix">
      <a href="#/zh-CN" class="link">中文</a>
      <a class="link" href="https://github.com/07akioni/xicons#installation" target="_blank"
        style="float: right;">Installation</a>
      <a class="link" href="https://github.com/07akioni/xicons#usage" target="_blank" style="float: right;">Usage</a>
      <a class="link" href="https://github.com/07akioni/xicons" target="_blank" style="float: right;">Github</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 20px
}

.nav-container {
  background: #FFF;
  left: 0;
  right: 0;
  top: 0;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .08)
}

.nav-prefix {
  padding-left: 24px;
  min-width: 240px
}

.nav-suffix {
  justify-content: flex-end;
  display: flex;
  padding-right: 24px;
  min-width: 240px;
  line-height: 1
}

.nav-suffix .link {
  margin-left: 16px;
  cursor: pointer;
  color: #303030;
  text-decoration: none
}

.nav-container .nav-main {
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  max-width: 680px;
  padding: 12px 24px
}

.nav-container .nav-main .search {
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 40px;
  padding: 0 12px 0 24px;
  font-size: 16px;
  transition: box-shadow .3s cubic-bezier(.4, 0, .2, 1);
  background: rgba(0, 0, 0, .06)
}

.nav-container .nav-main .search:focus {
  box-shadow: inset 0 0 0 2px #606060
}
</style>
