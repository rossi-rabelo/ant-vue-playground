<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    placeholder="input here"
    @select="onSelect"
    @search="onSearch"
    v-bind="$attrs"
  >
  </a-auto-complete>
</template>

<script setup>
import { AutoComplete as AAutoComplete } from 'ant-design-vue';

import { ref, watch } from 'vue'

const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  };
};

const value = ref('');

const options = ref([]);

const onSearch = (searchText) => {
  console.log('searchText');
  options.value = !searchText
    ? []
    : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
};

const onSelect = (value) => {
  console.log('onSelect', value);
};

watch(value, () => {
  console.log('value', value.value);
});
</script>

<style scoped>
</style>