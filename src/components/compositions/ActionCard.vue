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
          <ms-icon name="User"/>
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
  border-radius: 12px;
  box-shadow: 0px 0px 16px rgba(34, 52, 84, 0.12);

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .chip {
      width: fit-content;
      border-radius: 8px;
      border: 1px solid #EBEDF3;
      padding: 5px 8px 5px 4px;
      color: #8996AA;
    }

    .bold {
      font-weight: bold;
    }

    .responsible {
      border: 1px solid #EBEDF3;
      border-radius: 8px;
      gap: 8px;
      padding: 8px 0px 8px 8px;
      width: 80%;

      .grey-font {
        color: #929CAB;
      }

      .avatar {
        background-color: #EEF3FF;
        border-radius: 8px;
        padding: 8px;
      }
    }
  }
}

:deep(.ant-card-body) {
  padding: 12px;
}
</style>