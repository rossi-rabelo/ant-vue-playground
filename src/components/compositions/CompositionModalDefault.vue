<template>
  <div>
    <ant-button type="primary" @click="openModal">
      Abrir modal
    </ant-button>

    <ant-modal
      class="modal"
      width="624px"
      v-model:visible="visible"
      ok-text="Conversar com o suporte"
      cancel-text="Sair"
      title="Olá, Fulano"
    >
      <div class="body">
        Seu pedido de cancelamento foi realizado, aguarde o contato do
        Sucesso do Cliente para confirmar o cancelamento.
        <br>
        <br>
        Não existirão cobranças excedentes a partir da data do pedido.
      </div>
    </ant-modal>
  </div>
</template>

<script setup>
import AntModal from '../AntModal.vue';
import AntButton from '../AntButton.vue';
import { ref } from 'vue';

const visible = ref(false)

const openModal = () => {
  visible.value = true
}

const handleCancel = () => {
  console.log('Sair')
}

const handleOk = () => {
  console.log('Conversar com o suporte')
}
</script>

<style lang="less" scoped>
.modal {
  .title-container {
    padding: 16px 24px 0 16px;
  }

  .body {
    padding: 0 16px;
  }
}
</style>