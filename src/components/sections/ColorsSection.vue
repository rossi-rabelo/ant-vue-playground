<template>
  <exposition-card title="Colors">
    <div class="section column">
      <div
        v-for="(pallete, index) in colors"
        :key="index"
        style="display: flex"
      >
        <div
          v-for="(color, index) in pallete"
          :key="index"
          class="square"
          :class="color"
        >
          {{ color }}
        </div>
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';

const colors = [
  [
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
  ],
  [
    'green-1',
    'green-2',
    'green-3',
    'green-4',
    'green-5',
    'green-6',
    'green-7',
    'green-8',
    'green-9',
    'green-10'
  ],
  [
    'orange-1',
    'orange-2',
    'orange-3',
    'orange-4',
    'orange-5',
    'orange-6',
    'orange-7',
    'orange-8',
    'orange-9',
    'orange-10'
  ],
  [
    'red-1',
    'red-2',
    'red-3',
    'red-4',
    'red-5',
    'red-6',
    'red-7',
    'red-8',
    'red-9',
    'red-10'
  ]
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

.green-1 {
  background-color: @green-1;
}

.green-2 {
  background-color: @green-2;
}

.green-3 {
  background-color: @green-3;
}

.green-4 {
  background-color: @green-4;
}

.green-5 {
  background-color: @green-5;
}

.green-6 {
  background-color: @green-6;
}

.green-7 {
  background-color: @green-7;
}

.green-8 {
  background-color: @green-8;
}

.green-9 {
  background-color: @green-9;
}

.green-10 {
  background-color: @green-10;
}

.orange-1 {
  background-color: @orange-1;
}

.orange-2 {
  background-color: @orange-2;
}

.orange-3 {
  background-color: @orange-3;
}

.orange-4 {
  background-color: @orange-4;
}

.orange-5 {
  background-color: @orange-5;
}

.orange-6 {
  background-color: @orange-6;
}

.orange-7 {
  background-color: @orange-7;
}

.orange-8 {
  background-color: @orange-8;
}

.orange-9 {
  background-color: @orange-9;
}

.orange-10 {
  background-color: @orange-10;
}

.red-1 {
  background-color: @red-1;
}

.red-2 {
  background-color: @red-2;
}

.red-3 {
  background-color: @red-3;
}

.red-4 {
  background-color: @red-4;
}

.red-5 {
  background-color: @red-5;
}

.red-6 {
  background-color: @red-6;
}

.red-7 {
  background-color: @red-7;
}

.red-8 {
  background-color: @red-8;
}

.red-9 {
  background-color: @red-9;
}

.red-10 {
  background-color: @red-10;
}
</style>