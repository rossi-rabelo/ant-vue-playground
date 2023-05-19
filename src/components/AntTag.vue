<template>
  <a-tag v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-tag>
</template>

<script setup>
import { Tag as ATag } from 'ant-design-vue';
</script>

<style scoped>
</style>