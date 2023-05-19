<template>
  <exposition-card title="Pagination">
    <div class="section" style="flex-flow: column">
      <ant-pagination v-model:current="current" :total="50" show-less-items />

      <ant-pagination v-model:current="current" :total="500" />

      <ant-pagination disabled v-model:current="current" :total="500" />

      <ant-pagination size="small" :total="50" />

      <ant-pagination size="small" :total="50" show-size-changer show-quick-jumper />

      <ant-pagination size="small" :total="50" :show-total="total => `Total 50 items`" />

      <ant-pagination v-model:current="current" simple :total="50" />
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntPagination from '../AntPagination.vue';

import { ref } from 'vue';

const current = ref(2)
</script>