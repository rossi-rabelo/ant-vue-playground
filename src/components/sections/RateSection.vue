<template>
  <exposition-card title="Rate">
    <div class="section">
      <ant-rate v-model:value="value" allow-half/>

      <ant-rate v-model:value="value" allow-half>
        <template #character>
          <heart-outlined />
        </template>
      </ant-rate>
      <br />
      <ant-rate v-model:value="value" character="A" allow-half style="font-size: 36px" />
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntRate from '../AntRate.vue'

import { HeartOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue'

const value = ref(0)
</script>