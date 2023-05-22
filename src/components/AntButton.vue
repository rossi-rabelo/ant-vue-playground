<template>
  <a-button ref="button" v-bind="$attrs" class="button" @click="handleBlur">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :key="slot" :name="slot" v-bind="scope"/>
    </template>
  </a-button>
</template>

<script setup>
import { Button as AButton } from 'ant-design-vue';
import { ref } from 'vue'

const emit = defineEmits(['click'])

const button = ref(null)

const handleBlur = () => {
  button.value.blur()
  emit('click')
}
</script>
