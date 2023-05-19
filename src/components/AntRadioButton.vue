<template>
  <a-radio v-bind="$attrs"><slot></slot></a-radio>
</template>

<script setup>
import { Radio as ARadio } from 'ant-design-vue';
</script>