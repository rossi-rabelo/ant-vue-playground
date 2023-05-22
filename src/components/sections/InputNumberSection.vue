<template>
  <exposition-card title="Input Number">
    <div class="section">
      <ant-input-number :min="1" :max="10" />
      <ant-input-number :min="1" :max="10" disabled/>
      <span style="border: 1px solid black; padding: 3px">
        <ant-input-number :min="1" :max="10" decimal-separator=","/>
        With , as separator
      </span>
      
      <!-- With Addons -->
      <ant-input-number addon-before="+" addon-after="$"></ant-input-number>
      <ant-input-number>
        <template #addonBefore>
          <a-select style="width: 60px">
            <a-select-option value="add">+</a-select-option>
            <a-select-option value="minus">-</a-select-option>
          </a-select>
        </template>
        <template #addonAfter>
          <a-select style="width: 60px">
            <a-select-option value="USD">$</a-select-option>
            <a-select-option value="EUR">€</a-select-option>
            <a-select-option value="GBP">£</a-select-option>
            <a-select-option value="CNY">¥</a-select-option>
          </a-select>
        </template>
      </ant-input-number>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntInputNumber from '../AntInputNumber.vue';

import {
  Select as ASelect,
  SelectOption as ASelectOption
} from 'ant-design-vue';
</script>