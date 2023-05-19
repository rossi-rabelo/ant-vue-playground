<template>
  <exposition-card title="Tag/Chips">
    <div class="section column">
      <div class="section">
        <ant-tag>Tag 1</ant-tag>
        <ant-tag><a href="https://github.com/vueComponent/ant-design">Link</a></ant-tag>
        <ant-tag closable>Tag 2</ant-tag>
      </div>

      <div class="section">
        <ant-tag color="#f50">#f50</ant-tag>
        <ant-tag color="#2db7f5">#2db7f5</ant-tag>
        <ant-tag color="#87d068">#87d068</ant-tag>
        <ant-tag color="#108ee9">#108ee9</ant-tag>
      </div>

      <div class="section">
        <ant-tag color="#55acee">
          <template #icon>
            <twitter-outlined />
          </template>
          Twitter
        </ant-tag>

        <ant-tag color="#cd201f">
          <template #icon>
            <youtube-outlined />
          </template>
          Youtube
        </ant-tag>
      </div>
    </div>
  </exposition-card>
</template>

<script setup>
import ExpositionCard from '../ExpositionCard.vue';
import AntTag from '../AntTag.vue';

import { TwitterOutlined, YoutubeOutlined } from '@ant-design/icons-vue';
</script>

<style>
</style>