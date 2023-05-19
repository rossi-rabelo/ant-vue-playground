<template>
  <exposition-card title="Slider">
    <ant-slider v-model:value="value"/>
    <ant-slider v-model:value="value" disabled/>
    <ant-slider v-model:value="value2" range />
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntSlider from '../AntSlider.vue';
import { ref } from 'vue';

const value = ref(15)
const value2 = ref([20,50])
</script>