<template>
  <div>
    <ant-button type="primary" @click="openModal">
      Abrir modal
    </ant-button>

    <ant-modal
      class="modal"
      width="624px"
      v-model:visible="visible"
    >
      <template #title>
        <div class="title-container">
          <h3 class="title">Olá, Fulano</h3>
        </div>
      </template>

      <div class="body">
        Seu pedido de cancelamento foi realizado, aguarde o contato do
        Sucesso do Cliente para confirmar o cancelamento.
        <br>
        <br>
        Não existirão cobranças excedentes a partir da data do pedido.
      </div>

      <template #footer>
        <div class="flex justify-end footer">
          <ant-button
            class="cancel btn"
            type="primary"
            @click="handleCancel"
          >
            Sair
          </ant-button>

          <ant-button
            class="submit btn"
            type="primary"
            @click="handleOk"
          >
            Conversar com o suporte
          </ant-button>
        </div>
      </template>
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
    .title {
      padding: 0;
      margin: 0;
      font-size: 32px;
    }
  }

  .body {
    color: #202124;
    font-weight: bold;
    padding: 0 16px;
  }
  .footer {
    gap: 20px;
    padding: 8px;
    .cancel {
      background-color: #EBEDF3;
      border-color: #EBEDF3;
      color: black;
      width: 218px;
    }

    .submit {
      width: 248px;
    }

    .btn {
      border-radius: 8px;
    }
  }
}
</style>