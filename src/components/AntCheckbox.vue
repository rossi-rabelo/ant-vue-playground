<template>
  <a-checkbox v-bind="$attrs">{{ label }}</a-checkbox>
</template>

<script setup>
import { Checkbox as ACheckbox } from 'ant-design-vue';

defineProps({
  label: {
    type: String
  }
})
</script>

<style scoped lang="scss">
</style>