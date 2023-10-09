<script setup lang="ts">
import CpNavBar from '@/composable/CpNavBar.vue'

const fn = () => {
  console.log('点击了')
}
</script>

<template>
  <cp-nav-bar title="标题" right-text="注册" @click-right="fn"></cp-nav-bar>
</template>

<style scoped lang="scss"></style>
