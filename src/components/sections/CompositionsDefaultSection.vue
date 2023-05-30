<template>
  <exposition-card title="Compositions Default">
    <div class="section">
      <action-card-default />

      <composition-modal-default />
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';

import ActionCardDefault from '../compositions/ActionCardDefault.vue';
import CompositionModalDefault from '../compositions/CompositionModalDefault.vue';
</script>

<style lang="less" scoped>
</style>