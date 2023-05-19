<template>
  <exposition-card title="Search Select">
    <div class="section">
      <search-select
        v-model="model"
        placeholder="Digite um nome"
        :url="url"
        :filter="filterElements"
      />

      {{ model }}
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import SearchSelect from '../SearchSelect.vue';

import { ref } from 'vue'

const model = ref(null)

const url = 'https://run.mocky.io/v3/5243a607-d187-4304-a14c-dd2f456969a6'

const filterElements = (payload) => {
  return payload.hits.hits.map(el => ({ label: el._source.name, value: el._id }))
}
</script>