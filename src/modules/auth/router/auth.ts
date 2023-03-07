import type { RouteRecordRaw } from "vue-router";

export const authRouter: RouteRecordRaw = {
    path: '/auth',
    redirect: '/auth/login',
    component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: 'login',
            name: 'login-user',
            component: () => import('@/modules/auth/views/LoginView.vue')
        }
    ]
}