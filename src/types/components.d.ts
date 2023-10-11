import CpNavBar from '@/components/CpNavBar.vue'
import CpRadioBtn from '@/components/CpRadioBtn.vue'
// 2. 声明 vue 类型模块
declare module 'vue' {
  interface GlobalComponents {
    CpNavBar: typeof CpNavBar
    CpRadioBtn: typeof CpRadioBtn
  }
}
