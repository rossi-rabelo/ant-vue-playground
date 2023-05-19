<template>
  <exposition-card
    title="Button"
  >
    <div class="section column">
      <!-- Basic Buttons -->
      <div class="section">
        <ant-button type="primary">Primary Button</ant-button>
        <ant-button>Default Button</ant-button>
        <ant-button type="dashed">Dashed Button</ant-button>
        <ant-button type="text">Text Button</ant-button>
        <ant-button type="link">Link Button</ant-button>
      </div>

      <!-- Buttons sizes -->
      <div class="section">
        <ant-button type="primary">Default</ant-button>
        <ant-button type="primary" size="large">Large</ant-button>
        <ant-button type="primary" size="small">Small</ant-button>
      </div>

      <!-- With Icons -->
      <div class="section">
        <ant-button type="primary">
          <template #icon><SearchOutlined /></template>
          Procurar
        </ant-button>
        <ant-button type="primary" shape="circle">
          <template #icon><SearchOutlined /></template>
        </ant-button>
        <ant-button type="primary" shape="circle" size="large">A</ant-button>
        <ant-button type="primary" size="large">
          <template #icon><SearchOutlined /></template>
          Search
        </ant-button>
        <ant-button shape="circle" size="large">
          <template #icon><SearchOutlined /></template>
        </ant-button>
      </div>

      <!-- Danger Button -->
      <div class="section">
        <ant-button type="primary" danger>Primary</ant-button>
        <ant-button danger>Default</ant-button>
        <ant-button type="dashed" danger>Dashed</ant-button>
        <ant-button type="text" danger>Text</ant-button>
        <ant-button type="link" danger>Link</ant-button>
      </div>

      <!-- Loading State -->
      <div class="section">
        <ant-button type="primary" loading>Loading</ant-button>
        <ant-button type="primary" size="small" loading>Loading</ant-button>
        <ant-button type="primary" loading />
        <ant-button type="primary" shape="circle" loading />
        <ant-button danger shape="round" loading />
      </div>
      
      <!-- Disable State -->
      <div class="section">
        <ant-button type="primary" disabled>Primary(disabled)</ant-button>
        <ant-button disabled>Default(disabled)</ant-button>
        <ant-button type="dashed" disabled>Dashed(disabled)</ant-button>
        <ant-button type="text" disabled>Text(disabled)</ant-button>
        <ant-button type="link" disabled>Link(disabled)</ant-button>
        <ant-button danger disabled>Danger Default(disabled)</ant-button>
        <ant-button type="text" danger disabled>Danger Text(disabled)</ant-button>
        <ant-button type="link" danger disabled>Danger Link(disabled)</ant-button>
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../../components/ExpositionCard.vue';
import { SearchOutlined } from '@ant-design/icons-vue'

import AntButton from '../AntButton.vue';
</script>

<style scoped lang="scss">
</style>