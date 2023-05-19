<template lang="">
  <exposition-card
    title="Divider"
  >
    <p>
      {{ lorem }}
    </p>

    <ant-divider />

    <p>
      {{ lorem }}
    </p>

    <ant-divider>With Text</ant-divider>

    <p>
      {{ lorem }}
    </p>

    <ant-divider dashed />

    <p>
      {{lorem}}
    </p>

    <ant-divider orientation="left">Left Text</ant-divider>

    <p>
      {{ lorem }}
    </p>

    <ant-divider orientation="right">Right Text</ant-divider>

    <p>
      {{ lorem }}
    </p>

    <ant-divider orientation="left" orientation-margin="0px">
      Left Text with 0 orientationMargin
    </ant-divider>

    <p>
      {{ lorem }}
    </p>

    <ant-divider orientation="right" orientation-margin="50px">
      Right Text with 50px orientationMargin
    </ant-divider>

    <p>
      {{ lorem }}
    </p>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue'
import AntDivider from '../AntDivider.vue'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.`
</script>


<style scoped lang="scss">
  
</style>