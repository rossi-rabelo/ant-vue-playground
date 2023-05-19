<template>
  <ant-select
    v-model:value="value"
    show-search
    :placeholder="placeholder"
    style="width: 200px"
    :default-active-first-option="false"
    :filter-option="false"
    :not-found-content="null"
    :options="data"
    :loading="isLoadingData"
    @search="fetchData"
    @change="handleChange"
  />
</template>

<script setup>
import AntSelect from './AntSelect.vue';

import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Object, null],
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  filter: {
    type: Function,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

/*Related to input behavior*/
const data = ref([])
const isLoadingData = ref(false)

const value = ref(null)

const fetchData = async (value) => {
  if (value && value.length && value.length > 3) {
    isLoadingData.value = true
    data.value = []
    const response = await fetch(`${props.url}?term=${value}`)
    const jsonData = await response.json();
    data.value = props.filter(jsonData)
    isLoadingData.value = false
  }
}

onMounted(() => {
  value.value = props.modelValue?.value
})

watch(() => props.modelValue, () => {
  value.value = props.modelValue?.value
})

const handleChange = (value) => {
  const element = data.value.find(el => el.value === value)
  emit('update:modelValue', element)
}
</script>

<style lang="scss">
</style>