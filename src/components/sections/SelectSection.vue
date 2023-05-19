<template>
  <exposition-card title="Selection">
    <div class="section">
      <ant-select
        ref="select"
        v-model:value="value"
        style="width: 120px"
        :options="options"
      />

      <ant-select
        ref="select"
        v-model:value="value"
        style="width: 120px"
        :options="options"
        size="small"
      />

      <ant-select
        ref="select"
        v-model:value="value"
        style="width: 120px"
        :options="options"
        size="large"
      />

      <ant-select
        ref="select"
        v-model:value="value"
        style="width: 120px"
        :options="options"
        disabled
      />

      <ant-select
        ref="select"
        v-model:value="value"
        style="width: 120px"
        :options="options"
        disabled
      >
        <template #suffixIcon><smile-outlined class="ant-select-suffix" /></template>
      </ant-select>

      <ant-select
        v-model:value="value"
        show-search
        placeholder="input search text"
        style="width: 200px"
        :default-active-first-option="false"
        :show-arrow="false"
        :filter-option="false"
        :not-found-content="null"
        :options="options"
      />

      <ant-select
        v-model:value="multipleValue"
        mode="multiple"
        style="width: 250px"
        placeholder="Please select"
        :options="options"
      />
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntSelect from '../AntSelect.vue';
import { SmileOutlined } from '@ant-design/icons-vue';

import { ref } from 'vue'

const value = ref(null)
const multipleValue = ref([])

const options = ref([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe',
  },
])
</script>