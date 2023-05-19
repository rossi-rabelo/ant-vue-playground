<template>
  <a-card class="exposition-card">
    <template #title>
      <h1 class="exposition-card__title">
        {{ title }}
      </h1>
    </template>
    <slot></slot>
  </a-card>
</template>

<script setup>
import { Card as ACard } from 'ant-design-vue';

const props = defineProps({
  title: {
    type: String,
    default: ""
  }
})
</script>

<style scoped lang="scss">
.exposition-card {
  &__title {
    font-size: 24px;
    padding: 0;
    margin: 0;
    font-weight: bold;
  }
}
</style>