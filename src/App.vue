<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from '@/stores'

const userStore = useUserStore()
</script>

<template>
  <div>用户信息--{{ userStore.user }}</div>
  <van-button
    type="primary"
    @click="
      userStore.setUser({
        id: '1',
        mobile: '1',
        account: '1',
        avatar: '1',
        token: '1'
      })
    "
    >添加信息
  </van-button>
  <van-button type="primary" @click="userStore.clearUser">清空信息</van-button>
</template>
<style scoped lang="scss">
.main {
  color: var(--cp-primary);
}
</style>
