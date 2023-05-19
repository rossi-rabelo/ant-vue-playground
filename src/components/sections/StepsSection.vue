<template>
  <exposition-card title="Steps">
    <div class="section" style="flex-flow: column">
      <ant-steps :current="1"/>

      <ant-steps :current="1" size="small"/>

      <ant-steps :current="1" progress-dot/>

      <ant-steps :current="1" type="navigation"/>

      <ant-steps :current="1" direction="vertical"/>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntSteps from '../AntSteps.vue';
</script>

<style scoped lang="scss">
</style>