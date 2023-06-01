<template>
  <a-card class="floater">
    <template #title>
      <div class="flex floater__header align-center">
        <div style="position: relative">
          <div class="floater__header__icon flex justify-center align-center">
            <ms-icon name="Suitcase" class="icon" style="fill: #5788FD; transform: scale(1.2)"/>
          </div>
          <ms-icon class="support-icon" name="CrossCircle" />
        </div>

        Novo Negócio
      </div>
    </template>

    <div class="floater__body column">
      <div class="floater__body__main flex">
        <div class="flex align-center bottom-spaced">
          <ms-icon name="Suitcase" class="icon" style="fill: #CDD2E1"/>
          <ant-select class="full-width" placeholder="Status do negócio"></ant-select>
        </div>

        <div class="flex align-center bottom-spaced">
          <ant-input class="full-width" placeholder="Nome do negócio"></ant-input>
        </div>

        <div class="flex align-center bottom-spaced">
          <ms-icon name="Steps" class="icon" style="transform: scale(1.5)"/>
          <ant-select class="full-width" placeholder="Fase do negócio"></ant-select>
        </div>

        <div class="flex align-center bottom-spaced">
          <ms-icon name="Money" class="icon" />
          <ant-input class="full-width" placeholder="Valor"></ant-input>
        </div>

        <div class="flex align-center">
          <ms-icon name="Calendar" class="icon" />
          <ant-input class="full-width" placeholder="Data prevista"></ant-input>
        </div>

        <div class="flex align-center">
          <ms-icon name="User" style="fill: #CDD2E1" class="icon" />
          <ant-select class="full-width" placeholder="Responsável"></ant-select>
        </div>
      </div>

      <div class="floater__body__custom">
        <a-collapse
          expand-icon-position="right"
        >
          <a-collapse-panel key="1">
            <template #header>
              <div class="flex floater__body__custom__header">
                <h3>
                  Relacionados
                </h3>

                <div class="counters flex">
                  <div class="flex">
                    <ms-icon name="Company" class="icon" style="transform: scale(1.5)"/>
                    <div class="counter">2</div>
                  </div>

                  <div class="flex">
                    <ms-icon name="User" style="fill: #CDD2E1" class="icon" />
                    <div class="counter">1</div>
                  </div>

                  <div class="flex">
                    <ms-icon name="Steps" class="icon" style="transform: scale(1.5)"/>
                    <div class="counter">2</div>
                  </div>
                </div>
              </div>
            </template>

            <div class="flex custom__panel">
              <div class="flex align-center bottom-spaced">
                <ms-icon name="Company" class="icon" style="transform: scale(1.5)"/>
                <ant-input class="full-width" placeholder="Empresa relacionada"></ant-input>
              </div>

              <div class="flex align-center bottom-spaced">
                <ms-icon name="User" style="fill: #CDD2E1" class="icon" />
                <ant-input class="full-width" placeholder="Nome do contato"></ant-input>
              </div>

              <div class="flex align-center">
                <ms-icon name="Steps" class="icon" style="transform: scale(1.5)"/>
                <ant-input class="full-width" placeholder="Projetos relacionados"></ant-input>
              </div>
            </div>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>

    <ant-divider class="divider"/>

    <div class="floater__footer flex justify-end">
      <ant-button type="primary">Salvar</ant-button>
    </div>
  </a-card>
</template>

<script setup>
import {
  Card as ACard,
  Collapse as ACollapse,
  CollapsePanel as ACollapsePanel
} from 'ant-design-vue';

import AntSelect from '../AntSelect.vue';
import AntInput from '../AntInput.vue';
import AntDivider from '../AntDivider.vue';
import MsIcon from '../MsIcon.vue'
import AntButton from '../AntButton.vue'
</script>

<style lang="less" scoped>
.floater {
  max-width: 623px;

  &__header {
    &__icon {
      background: #EEF3FF;
      border-radius: 8px;
      padding: 15px;
      margin-right: 15px;
    }

    .support-icon {
      position: absolute;
      right: -5px;
      bottom: -12px;
    }
  }

  &__body {
    padding: 20px 12px;

    &__main {
      flex-wrap: wrap;
      gap: 2%;

      div:nth-child(1) {
        width: 33%;
      }

      div:nth-child(2) {
        width: 65%
      }

      div:nth-child(n + 3) {
        width: 49%;
      }
    }

    &__custom {
      margin-top: 20px;

      &__header {
        h3 {
          margin: 0;
        }

        .counters {
          gap: 10px;
          margin-left: 12px;

          .counter {
            background-color: #dae5ff;
            border-radius: 12px;
            padding: 4px 12px;
            color: #5788FD;
          }
        }
      }

      .custom__panel {
        flex-wrap: wrap;
        gap: 2%;

        div:nth-child(-n + 2) {
          width: 49%;
        }

        div:nth-child(n + 3) {
          width: 100%;
        }
      }
    }

    .icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    .bottom-spaced {
      margin-bottom: 20px;
    }
  }

  &__footer {
    padding: 20px;
  }

  .divider {
    margin: 0;
  }
}

:deep(.ant-card-body) {
  padding: 0;
}

:deep(.ant-card-head) {
  padding: 12px;
}

:deep(.ant-card-head-title) {
  padding: 0;
}
</style>