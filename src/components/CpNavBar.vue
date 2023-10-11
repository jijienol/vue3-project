<script setup lang="ts">
import router from '@/router'

type Props = {
  title?: string
  rightText?: string
  back?: () => void
}
const prop = defineProps<Props>()
const emits = defineEmits<{
  (e: 'click-right'): void
  (e: 'click-left'): void
}>()
const onClickRight = () => {
  emits('click-right')
}
const onClickLeft = () => {
  if (prop.back) return prop.back()
  if (history.state.back) {
    router.back()
  } else {
    router.push('/user')
  }
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
