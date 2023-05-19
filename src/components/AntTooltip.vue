<template>
  <a-tooltip v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-tooltip>
</template>

<script setup>
import { Tooltip as ATooltip } from 'ant-design-vue';
</script>

<style lang="scss">
</style>