import { createRouter, createWebHistory } from 'vue-router'

import { authRouter } from '@/modules/auth/router/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/home/layouts/HomeLayout.vue')
    },
    {
      ...authRouter
    }
  ]
})

export default router
