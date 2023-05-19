<template>
  <a-breadcrumb v-bind="$attrs">
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { Breadcrumb as ABreadcrumb } from 'ant-design-vue';
import { BreadcrumbItem as ABreadcrumbItem } from 'ant-design-vue';
</script>

<style scoped>
</style>