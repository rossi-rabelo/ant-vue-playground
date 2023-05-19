<template>
  <a-slider v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-slider>
</template>

<script setup>
import { Slider as ASlider } from 'ant-design-vue';
</script>