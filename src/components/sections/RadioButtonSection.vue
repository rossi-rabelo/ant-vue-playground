<template>
  <exposition-card title="Radio Button">
    <div class="section">
      <ant-radio-button v-model:checked="checked">Radio</ant-radio-button>

      <a-radio-group v-model:value="value2">
        <ant-radio-button value="a">Hangzhou</ant-radio-button>
        <ant-radio-button value="b">Shanghai</ant-radio-button>
        <ant-radio-button value="c">Beijing</ant-radio-button>
        <ant-radio-button value="d">Chengdu</ant-radio-button>
      </a-radio-group>

      <a-radio-group v-model:value="value" button-style="solid">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntRadioButton from '../AntRadioButton.vue';

import { RadioGroup as ARadioGroup, RadioButton as ARadioButton } from 'ant-design-vue';

import { ref } from 'vue'

const checked = ref(false)

const value = ref('')
const value2 = ref('')
</script>
