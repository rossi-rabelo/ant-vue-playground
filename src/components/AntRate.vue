<template>
  <a-rate v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-rate>
</template>

<script setup>
import { Rate as ARate } from 'ant-design-vue';
</script>