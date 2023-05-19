<template>
  <a-divider v-bind="$attrs">
    <slot></slot>
  </a-divider>
</template>

<script setup>
import { Divider as ADivider } from 'ant-design-vue';
</script>

<style scoped lang="scss">
</style>