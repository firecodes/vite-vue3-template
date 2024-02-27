<script lang="ts" setup>
defineProps<{
  placeholder?: string
}>()
</script>

<template>
  <div class="empty">
    <slot>{{ placeholder }}</slot>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables.scss';
@import 'src/assets/styles/mixins.scss';

.empty {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 5em;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: $text-divider;
  letter-spacing: 0.1em;
}
</style>
