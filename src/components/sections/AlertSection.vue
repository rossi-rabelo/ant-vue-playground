<template>
  <exposition-card title="Alert">
    <div class="section column">
      <div class="section">
        <ant-alert message="Success Text" type="success" />
        <ant-alert message="Info Text" type="info" />
        <ant-alert message="Warning Text" type="warning" />
        <ant-alert message="Error Text" type="error" />
      </div>

      <div class="section">
        <ant-alert message="Success Text" type="success">
          <template #description>
            <p>
              Success Description
              <span style="color: red">Success</span>
              Description Success Description
            </p>
          </template>
        </ant-alert>
        <ant-alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
        />
      </div>

      <div class="section column">
        <ant-alert message="Warning text" banner />
        <ant-alert
          message="Very long warning text warning text text text text text text text"
          banner
          closable
        />
        <ant-alert :show-icon="false" message="Warning text without icon" banner />
        <ant-alert type="error" message="Error text" banner />
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntAlert from '../AntAlert.vue';
</script>

<style lang="scss">
</style>