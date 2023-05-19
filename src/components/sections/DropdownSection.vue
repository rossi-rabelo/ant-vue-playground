<template>
  <exposition-card title="Dropdown">
    <div class="section dropdown-section">
      <ant-dropdown title="Default"/>

      <ant-dropdown title="With Icon">
        <template #icon><UserOutlined /></template>
      </ant-dropdown>

      <ant-dropdown title="Disabled" disabled/>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntDropdown from '../AntDropdown.vue';
import { UserOutlined } from '@ant-design/icons-vue';
</script>

<style scoped lang="scss">
.dropdown-section {
  padding-bottom: 3em;
}
</style>