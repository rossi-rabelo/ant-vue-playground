<template>
  <a-modal v-bind="$attrs">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-modal>
</template>

<script setup>
import { Modal as AModal } from 'ant-design-vue';
</script>