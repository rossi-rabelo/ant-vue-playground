<template>
  <a-switch v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-switch>    
</template>

<script setup>
import { Switch as ASwitch } from 'ant-design-vue';
</script>