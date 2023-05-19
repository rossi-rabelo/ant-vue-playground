<template>
  <a-table v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-table>
</template>

<script setup>
import { Table as ATable } from 'ant-design-vue';
</script>

<style>
</style>