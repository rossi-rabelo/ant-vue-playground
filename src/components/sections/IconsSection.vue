<template>
  <exposition-card title="Icons">
    <div class="section">
      <ms-icon class="small-icon" name="SmileFace"/>
      <ms-icon class="icon" name="SmileFace"/>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import MsIcon from '../MsIcon.vue';
</script>

<style lang="less">
@import '../../assets/main.less';

.small-icon {
fill: @primary-color;
}

.icon {
  width: 80px;
  height: 80px;
  fill: grey;
}
</style>