import CpNavBar from '@/components/CpNavBar.vue'
// 2. 声明 vue 类型模块
declare module 'vue' {
  interface GlobalComponents {
    CpNavBar: typeof CpNavBar
  }
}
