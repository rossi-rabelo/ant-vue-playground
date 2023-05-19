<template>
  <exposition-card title="Date Picker">
    <div class="section">
      <ant-date-picker />
      <ant-date-picker picker="week" />
      <ant-date-picker picker="month" />
      <ant-date-picker picker="quarter" />
      <ant-date-picker picker="year" />

      <ant-date-picker :format="dateFormat" />
      <ant-date-picker :format="dateFormatList" />
      <ant-date-picker :format="monthFormat" picker="month" />
      <ant-date-picker :format="customFormat" />

      <ant-date-picker size="large"/>
      <ant-date-picker size="small"/>
    
      <!-- Range Picker -->
      <ant-range-picker />
      <ant-range-picker show-time />
      <ant-range-picker picker="week" />
      <ant-range-picker picker="month" />
      <ant-range-picker picker="year" />
      <ant-range-picker :format="dateFormat" />
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntDatePicker from '../AntDatePicker.vue';
import AntRangePicker from '../AntRangePicker.vue';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const customFormat = value => `custom format: ${value.format(dateFormat)}`
</script>

<style scoped>
</style>