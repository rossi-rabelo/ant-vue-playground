<template>
  <exposition-card title="Checkbox">
    <div class="section">
      <ant-checkbox v-model:checked="checked" label="Checkbox"/>

      <ant-checkbox v-model:checked="checked" disabled label="Disabled"/>

      <ant-checkbox v-model:checked="checked" :indeterminate="true" label="Indeterminate"/>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntCheckbox from '../AntCheckbox.vue';

import { ref } from 'vue'

const checked = ref(false)
</script>

<style scoped lang="scss">
</style>