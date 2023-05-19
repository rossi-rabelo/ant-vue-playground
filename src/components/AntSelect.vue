<template>
  <a-select
    v-bind="$attrs"
  >
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-select>
</template>

<script setup>
import { Select as ASelect } from 'ant-design-vue';
</script>