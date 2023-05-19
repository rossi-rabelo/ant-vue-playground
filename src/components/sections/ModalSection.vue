<template>
  <exposition-card title="Modal">
    <div class="section">
      <ant-button @click="switchModal">Modal</ant-button>

      <ant-modal v-model:visible="first" title="Basic Modal">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ant-modal>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntModal from '../AntModal.vue';
import AntButton from '../AntButton.vue';

import { ref } from 'vue'

const first = ref(false)

const switchModal = () => {
  first.value = !first.value
}
</script>