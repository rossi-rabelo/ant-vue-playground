<template>
  <exposition-card title="Menu">
    <div class="section">
      <ant-menu mode="inline" class="inline"/>

      <ant-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </ant-button>
      
      <div class="collapsed-container">
        <ant-menu
          mode="inline"
          :inline-collapsed="collapsed"
          class="collapsed"
          theme="dark"
        />
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntMenu from '../AntMenu.vue';
import AntButton from '../AntButton.vue';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';

import { ref } from 'vue'

const collapsed = ref(false)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style scoped>
.inline {
  width: 256px;
}

.collapsed-container {
  width: 256px;
}
</style>