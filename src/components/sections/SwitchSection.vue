<template>
  <exposition-card title="Switch">
    <div class="section">
      <ant-switch v-model:checked="checked" />
      <ant-switch v-model:checked="checked" disabled />

      <ant-switch v-model:checked="checked">
        <template #checkedChildren><check-outlined /></template>
        <template #unCheckedChildren><close-outlined /></template>
      </ant-switch>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntSwitch from '../AntSwitch.vue';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';

import { ref } from 'vue';

const checked = ref(false)
</script>