<script setup lang="ts">
type Props = {
  title?: string
  rightText?: string
}
defineProps<Props>()
const emits = defineEmits<{
  (e: 'click-right'): void
}>()
const onClickRight = () => {
  emits('click-right')
}
</script>
<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      :right-text="rightText"
      @click-right="onClickRight"
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
