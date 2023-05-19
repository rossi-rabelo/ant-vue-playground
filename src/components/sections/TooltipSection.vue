<template>    
  <exposition-card title="Tooltip">
    <div id="components-a-tooltip-demo-placement">
      <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <ant-tooltip placement="topLeft">
          <template #title>
            <span>Top Left</span>
          </template>
          <ant-button>TL</ant-button>
        </ant-tooltip>

        <ant-tooltip placement="top">
          <template #title>
            <span>Top</span>
          </template>
          <ant-button>Top</ant-button>
        </ant-tooltip>

        <ant-tooltip placement="topRight">
          <template #title>
            <span>Top Right</span>
          </template>
          <ant-button>TR</ant-button>
        </ant-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <ant-tooltip placement="leftTop">
          <template #title>
            <span>Left Top</span>
          </template>
          <ant-button>LT</ant-button>
        </ant-tooltip>

        <ant-tooltip placement="left">
          <template #title>
            <span>Left</span>
          </template>
          <ant-button>Left</ant-button>
        </ant-tooltip>

        <ant-tooltip placement="leftBottom">
          <template #title>
            <span>Left Bottom</span>
          </template>
          <ant-button>LB</ant-button>
        </ant-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
        <ant-tooltip placement="rightTop">
          <template #title>
            <span>Right Top</span>
          </template>
          <ant-button>RT</ant-button>
        </ant-tooltip>

        <ant-tooltip placement="right">
          <template #title>
            <span>Right</span>
          </template>
          <ant-button>Right</ant-button>
        </ant-tooltip>

        <ant-tooltip placement="rightBottom">
          <template #title>
            <span>Right Bottom</span>
          </template>
          <ant-button>RB</ant-button>
        </ant-tooltip>
      </div>
      <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <ant-tooltip placement="bottomLeft">
          <template #title>
            <span>Bottom Left</span>
          </template>
          <ant-button>BL</ant-button>
        </ant-tooltip>

        <ant-tooltip placement="bottom">
          <template #title>
            <span>Bottom</span>
          </template>
          <ant-button>Bottom</ant-button>
        </ant-tooltip>

        <ant-tooltip placement="bottomRight">
          <template #title>
            <span>Bottom Right</span>
          </template>
          <ant-button>BR</ant-button>
        </ant-tooltip>
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntTooltip from '../AntTooltip.vue';
import AntButton from '../AntButton.vue';

const buttonWidth = 70
</script>

<style lang="scss" scoped>
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>