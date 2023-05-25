<template>
  <exposition-card title="Texts">
    <div class="section">
      <div
        v-for="(element, index) in texts"
        :key="index"
        class="text-container"
      >
        <p
          class="text"
          v-html="element.text"
        >
        </p>
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';

const texts = [
  {
    text: 'Este é um teste justo e curto de texto para verificar o Çedilha, bem como verificar o Àcento, letras MAÍUSCULAS e números 1, 2, 3 no geral.',
  },
  {
    text: 'Este é um teste &#128540; justo e curto de texto para verificar o Çedilha, bem como verificar o &#129315; Àcento, letras MAÍUSCULAS &#128526; e números 1, 2, 3 no geral.',
  },
  {
    text: 'Teste justo para o Çedilha e Ácento. Esse teste também é para MAIÚSCULAS.',
  }
]
</script>

<style lang="less">
.text-container {
  width: 250px;
  border: 1px solid black;
  padding: 5px;
}
</style>