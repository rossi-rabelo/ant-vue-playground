<template>
  <exposition-card title="Cascader">
    <div class="section">
      <ant-cascader  />

      <ant-cascader size="large" />

      <ant-cascader size="small" />

      <ant-cascader>
        <template #suffixIcon><smile-outlined class="test" /></template>
      </ant-cascader>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntCascader from '../AntCascader.vue';

import { SmileOutlined } from '@ant-design/icons-vue';
</script>

<style scoped lang="scss">
</style>