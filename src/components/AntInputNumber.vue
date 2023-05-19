<template>
  <a-input-number v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-input-number>
</template>

<script setup>
import { InputNumber as AInputNumber } from 'ant-design-vue';
</script>

<style scoped lang="scss">
</style>