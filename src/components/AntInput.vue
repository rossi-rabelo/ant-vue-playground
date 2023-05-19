<template>
  <a-input v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-input>
</template>

<script setup>
import { Input as AInput } from 'ant-design-vue';
</script>

<style scoped lang="scss">
</style>