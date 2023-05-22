<template>
  <exposition-card title="Colors">
    <div class="section">
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="square"
        :class="color"
      >
        {{ color }}
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';

const colors = [
  'blue-1',
  'blue-2',
  'blue-3',
  'blue-4',
  'blue-5',
  'blue-6',
  'blue-7',
  'blue-8',
  'blue-9',
  'blue-10'
]
</script>

<style lang="less" scoped>
@import 'src/assets/main.less';

.square {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.blue-1 {
  background-color: @blue-1;
}

.blue-2 {
  background-color: @blue-2;
}

.blue-3 {
  background-color: @blue-3;
}

.blue-4 {
  background-color: @blue-4;
}

.blue-5 {
  background-color: @blue-5;
}

.blue-6 {
  background-color: @blue-6;
}

.blue-7 {
  background-color: @blue-7;
}

.blue-8 {
  background-color: @blue-8;
}

.blue-9 {
  background-color: @blue-9;
}

.blue-10 {
  background-color: @blue-10;
}
</style>