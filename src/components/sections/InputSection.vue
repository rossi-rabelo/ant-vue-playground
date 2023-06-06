<template>
  <exposition-card title="Input">
    <div class="section">
      <ant-input size="small" placeholder="small size" />
      <ant-input placeholder="default size" />
      <ant-input size="large" placeholder="large size" />
      <ant-input show-count :maxlength="20" />
      <ant-input disabled placeholder="disabled"/>

      <!-- With icons -->
      <ant-input placeholder="Basic usage">
        <template #prefix>
          <user-outlined type="user" />
        </template>

        <template #suffix>
          <a-tooltip title="Extra information">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </ant-input>

      <!-- With Addon -->
      <ant-input addon-before="Http://" addon-after=".com" />
      <ant-input>
        <template #addonBefore>
          <a-select style="width: 90px">
            <a-select-option value="Http://">Http://</a-select-option>
            <a-select-option value="Https://">Https://</a-select-option>
          </a-select>
        </template>
        <template #addonAfter>
          <a-select style="width: 80px">
            <a-select-option value=".com">.com</a-select-option>
            <a-select-option value=".jp">.jp</a-select-option>
            <a-select-option value=".cn">.cn</a-select-option>
            <a-select-option value=".org">.org</a-select-option>
          </a-select>
        </template>
      </ant-input>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntInput from '../AntInput.vue';
import {
  Tooltip as ATooltip,
  Input as AInput,
  Select as ASelect,
  SelectOption as ASelectOption
} from 'ant-design-vue';

import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
</script>

<style scoped lang="scss">

</style>