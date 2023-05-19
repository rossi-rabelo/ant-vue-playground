<template>
  <exposition-card title="Page Header">
    <div class="section">
      <ant-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Title"
        sub-title="This is a subtitle"
        @back="() => null"
      />
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntPageHeader from '../AntPageHeader.vue';
</script>

<style scoped lang="scss">
.section {
  width: 100%;
}
</style>