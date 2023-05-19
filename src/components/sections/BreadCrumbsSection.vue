<template>
  <exposition-card title="BreadCrumbs">
    <div>
      <AntBreadCrumbs />

      <!-- Configure Separator -->
      <AntBreadCrumbs separator=">" />
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue'
import AntBreadCrumbs from '../AntBreadCrumbs.vue';
</script>

<style scoped>
</style>