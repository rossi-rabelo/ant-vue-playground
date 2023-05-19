<template>
  <a-dropdown-button
    v-bind="$attrs"
    @click="handleButtonClick"
  >
    {{ $attrs.title }}
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">
          <UserOutlined />
          1st menu item
        </a-menu-item>
        <a-menu-item key="2">
          <UserOutlined />
          2nd menu item
        </a-menu-item>
        <a-menu-item key="3">
          <UserOutlined />
          3rd item
        </a-menu-item>
      </a-menu>
    </template>

    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-dropdown-button>
</template>

<script setup>
import { 
  DropdownButton as ADropdownButton,
  Menu as AMenu,
  MenuItem as AMenuItem
} from 'ant-design-vue';

import { UserOutlined } from '@ant-design/icons-vue';

const handleButtonClick = () => {}

const handleMenuClick = () => {}
</script>

<style scoped lang="scss">
</style>