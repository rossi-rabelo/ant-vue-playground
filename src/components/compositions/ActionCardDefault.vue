<template>
  <a-card class="card" style="width: 300px">
    <div class="card-content">
      <span class="bold">Trigger</span>
      
      <ant-tag class="chip flex align-center">
        <template #icon>
          <ms-icon name="Fase"/>
        </template>

        Chip text
      </ant-tag>
      <span class="bold">Action</span>

      <div class="responsible flex">
        <div class="avatar flex column justify-center">
          <ms-icon name="User" style="fill: #5788FD"/>
        </div>

        <div class="flex column">
          <span class="bold">Responsável</span>
          <span class="grey-font">Ana Silva</span>
        </div>
      </div>
    </div>
  </a-card>
</template>

<script setup>
import { Card as ACard } from 'ant-design-vue';
import AntTag from '../AntTag.vue';
import MsIcon from '../MsIcon.vue';
</script>

<style lang="less" scoped>

.card {
  .card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .chip {
      width: fit-content;
    }

    .bold {
      font-weight: bold;
    }

    .responsible {
      gap: 8px;
      width: 80%;

      .avatar {
        padding: 8px;
      }
    }
  }
}

:deep(.ant-card-body) {
  padding: 12px;
}
</style>