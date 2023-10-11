<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
<template>
  <div>
    <svg aria-hidden="true">
      <!-- #icon-文件夹名称-图片名称 -->
      <use :href="`#icon-${name}`" />
    </svg>
  </div>
</template>

<style scoped></style>
