<template>
  <router-view></router-view>
  <van-tabbar route>
    <van-tabbar-item to="/home">
      首页
      <template #icon="{ active }">
        <cp-icon :name="`home-index-${active ? 'active' : 'default'}`"></cp-icon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/article"
      >健康百科
      <template #icon="{ active }">
        <cp-icon :name="`home-article-${active ? 'active' : 'default'}`"></cp-icon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/notify"
      >消息中心
      <template #icon="{ active }">
        <cp-icon :name="`home-notice-${active ? 'active' : 'default'}`"></cp-icon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/user"
      >我的
      <template #icon="{ active }">
        <cp-icon :name="`home-mine-${active ? 'active' : 'default'}`"></cp-icon>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import CpIcon from '@/components/CpIcon.vue'
</script>

<style scoped></style>
