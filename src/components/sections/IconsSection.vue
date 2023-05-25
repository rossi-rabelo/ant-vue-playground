<template>
  <exposition-card title="Icons">
    <div class="section">
      <ms-icon class="icon" name="SmileFace"/>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import MsIcon from '../MsIcon.vue';
</script>

<style lang="less">
.icon {
  width: 80px;
  height: 80px;
}
</style>