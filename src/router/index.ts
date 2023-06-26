import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')
const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/dashboard/index.vue'),
                name: 'Dashboard',
                meta: {
                    title: 'Dashboard',
                    icon: 'dashboard'
                }
            }
        ]
    },
]

const asyncRoutes: RouteRecordRaw[] = [
    {
        path: '/test',
        component: Layout,
        meta: {
            title: 'Test',
            icon: 'star'
        },
        redirect: '/test/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/test/index.vue'),
                meta: {
                    title: 'Nested-1',
                    icon: 'wechat'
                },
                children: []
            },
        ]
    },
    {
        path: '/icons',
        component: Layout,
        redirect: '/icons/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/icons/index.vue'),
                meta: {
                    title: 'Icons',
                    icon: 'icon'
                },
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/error-page/404.vue')
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router
export { asyncRoutes, constantRoutes }
