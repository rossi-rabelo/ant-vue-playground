<template>
  <div class="wrapper">
    <a-input class="input" v-bind="$attrs">
      <template v-for="(_, slot) of $slots" #[slot]="scope">
        <slot :key="slot" :name="slot" v-bind="scope"/>
      </template>
    </a-input>

    <label class="label">
      <span>
        Sacola
      </span>
    </label>
  </div>
</template>

<script setup>
import { Input as AInput } from 'ant-design-vue';
</script>

<style scoped lang="less">
@import '../assets/main.less';


.wrapper {
  position: relative;
  width: 300px;
}

/* add basic styles for input */
.input {
  padding: 10px 20px;
}

/* Change position offset top and left when input focused or valided */
.input:focus + .label {
  top: -10px;
  font-size: 12px;
  left: 10px;
  padding: 0 4px;
  display: flex;
  justify-content: center;
  text-shadow: none;
  border-radius: @rkt-border-radius-sm;
}

.input:focus {
  box-shadow: none;
}

/* Move label into input and disable user event on it */
.label {
  position: absolute;
  left: 20px;
  top: 10px;
  pointer-events: none;
  display: flex;
  transition: .2s ease;
}

/* before and after of label as the layer for backgroud of haft their parent */
.label::before {
  transition: all .2s ease;
  position: absolute;
  height: 50%;
  width: 100%;
  content: '';
}

.label::after {
  transition: all .2s ease;
  position: absolute;
  height: 50%;
  width: 100%;
  content: '';
  top: 50%;
}

/* Span have text for label, it will put on top of label::after, label::before */
span {
  position: relative;
  z-index: 99;
}

/* Change the backgroud color following their parent */
.input:focus + .label::after {
  background: @white;
}

.input:focus + .label::before {
  background: @white;
}


</style>