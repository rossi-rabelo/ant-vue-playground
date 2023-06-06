<template>
  <exposition-card title="Buttons Compositions">
    <div class="section">
      <div class="section column">
        <ant-button size="small" type="primary">Main 32</ant-button>
        <ant-button size="small" type="primary" disabled>Main 32</ant-button>
      </div>
    
      <div class="section column">
        <ant-button size="small" type="danger">Danger 32</ant-button>
        <ant-button size="small" type="danger" disabled>Danger 32</ant-button>
      </div>

      <div class="section column">
        <ant-button size="small">Main 32</ant-button>
        <ant-button size="small" disabled>Main 32</ant-button>
      </div>

      <div class="section column">
        <ant-button class="alternative" type="primary" size="small">Alternative 32</ant-button>
        <ant-button class="alternative" type="primary" size="small" disabled>Alternative 32</ant-button>
      </div>

      <div class="section column">
        <ant-button class="text-primary" type="text" size="small">Text Button</ant-button>
        <ant-button class="text-disabled" type="text" size="small" disabled>Text Button</ant-button>
      </div>

      <div class="section column">
        <ant-button class="text-danger" danger type="text" size="small">Text Danger</ant-button>
        <ant-button class="text-disabled" danger type="text" size="small" disabled>Text Danger</ant-button>
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntButton from '../AntButton.vue';
</script>

<style lang="less" scoped>
@import '../../assets/main.less';
.alternative {
  background: @rkt-gray-3;
  border: none;
  color: @rkt-dark-gray-10;

  &:hover {
    background: @rkt-gray-4;
    color: @rkt-dark-gray-10;
  }
}

.text-primary {
  color: @rkt-blue-6;

  &:hover {
    color: @rkt-blue-6;
    background: @rkt-blue-1;
  }
}

.text-danger {
  &:hover {
    color: @rkt-red-6 !important;
    background: @rkt-red-1 !important;
  }
}
.text-disabled {
  background: @rkt-gray-2 !important;
  color: @rkt-gray-5 !important;
}

</style>