<template>
  <a-page-header v-bind="$attrs" class="page-header"/>

  <a-page-header
    v-bind="$attrs"
    class="page-header"
    :breadcrumb="{ routes }"
  />
</template>

<script setup>
import { PageHeader as APageHeader } from 'ant-design-vue';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
]
</script>

<style scoped lang="scss">
.page-header {
  width: 100%;
}
</style>