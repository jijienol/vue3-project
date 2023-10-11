import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: import('@/views/Home/index.vue')
        },
        {
          path: '/article',
          component: import('@/views/Article/index.vue')
        },
        {
          path: '/notify',
          component: import('@/views/Notify/index.vue')
        },
        {
          path: '/my',
          component: import('@/views/My/index.vue')
        }
      ]
    }
  ]
})
console.log(import.meta.env)
export default router
