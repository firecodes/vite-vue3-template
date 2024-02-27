<script lang="ts" setup>
const handleStatementModal = () => { }
</script>

<template>
  <container tag="footer" class="footer">
    <a class="statement" href="javascript:void(0)" @click="handleStatementModal">
      sitemap.xml NodePress
    </a>
  </container>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables.scss';
@import 'src/assets/styles/mixins.scss';

.footer {
  display: flex;
  align-items: center;
  height: $footer-height;
  text-align: center;
  text-transform: uppercase;
  font-size: $font-size-h6;
  color: $text-secondary;
  @include common-bg-module();

  a:hover {
    @include text-underline();
  }
}
</style>
