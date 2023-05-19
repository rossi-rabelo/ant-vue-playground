<template>
  <a-alert v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-alert>
</template>

<script setup>
import { Alert as AAlert } from 'ant-design-vue';
</script>

<style lang="scss">
</style>