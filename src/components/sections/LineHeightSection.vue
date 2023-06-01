<template>
  <exposition-card title="Texts">
    <div class="section container">
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

      <div
        v-for="heading in headings"
        :key="heading.tag"
        class="heading-container"
      >
        <component
          :is="heading.tag"
          class="title"
        >
          {{ heading.tag }}
        </component>
        <component
          :is="heading.tag"
          v-html="heading.text"
        >
        </component>
      </div>

      <div
        v-for="(element, index) in sizes"
        :key="index"
        class="text-container"
        :style="{
          'font-size': `${element.size}.px`
        }"
      >
        <span class="title">
          {{element.size}}px
        </span>
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

const headings = [
  {
    text: 'Este é um teste justo e curto de texto para verificar o Çedilha, bem como verificar o Àcento, letras MAÍUSCULAS e números 1, 2, 3 no geral.',
    tag: 'h1'
  },
  {
    text: 'Este é um teste &#128540; justo e curto de texto para verificar o Çedilha, bem como verificar o &#129315; Àcento, letras MAÍUSCULAS &#128526; e números 1, 2, 3 no geral.',
    tag: 'h2'
  },
  {
    text: 'Teste justo para o Çedilha e Ácento. Esse teste também é para MAIÚSCULAS.',
    tag: 'h3'
  }
]

const sizes = [
  {
    text: 'Este é um teste justo e curto de texto para verificar o Çedilha, bem como verificar o Àcento, letras MAÍUSCULAS e números 1, 2, 3 no geral.',
    size: '12'
  },
  {
    text: 'Este é um teste &#128540; justo e curto de texto para verificar o Çedilha, bem como verificar o &#129315; Àcento, letras MAÍUSCULAS &#128526; e números 1, 2, 3 no geral.',
    size: '18'
  },
  {
    text: 'Teste justo para o Çedilha e Ácento. Esse teste também é para MAIÚSCULAS.',
    size: '24'
  }
]
</script>

<style lang="less" scoped>
.container {
  gap: 30px;
}
.text-container {
  width: 250px;
  border: 1px solid black;
  padding: 5px;
  position: relative;
}

.heading-container {
  width: 500px;
  border: 1px solid black;
  padding: 10px;
  position: relative;
}

.title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-80%);
  background-color: white;
  padding: 0 1rem;
  margin: 0;
}
</style>