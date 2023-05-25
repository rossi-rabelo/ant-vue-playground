<template>
  <component :is="icons[name]" />
</template>

<script setup>
import * as icons from './icons'

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>