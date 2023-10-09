<script setup lang="ts">
type Props = {
  title?: string
  rightText?: string
}
defineProps<Props>()
const emits = defineEmits<{
  (e: 'click-right'): void
  (e: 'click-left'): void
}>()
const onClickRight = () => {
  emits('click-right')
}
const onClickLeft = () => {
  emits('click-left')
}
</script>
<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      :right-text="rightText"
      @click-right="onClickRight"
      @click-left="onClickLeft"
    ></van-nav-bar>
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .van-nav-bar {
    &__arrow {
      font-size: 18px;
      color: var(--cp-text1);
    }

    &__text {
      font-size: 15px;
    }
  }
}
</style>
