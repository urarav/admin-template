import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')
const routes: RouteRecordRaw[] = [
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
        children: [
            {
                path: 'index',
                component: () => import('@/views/dashboard/index.vue'),
                meta: {
                    title: 'Dashboard',
                    icon: 'dashboard'
                }
            }
        ]
    },
    {
        path: '/test',
        component: Layout,
        meta: {
            title: 'Test',
            icon: 'star'
        },
        children: [
            {
                path: 'index1',
                component: () => import('@/views/test/index.vue'),
                meta: {
                    title: 'Nested-1',
                    icon: 'wechat'
                },
                children: []
            }
        ]
    },
    {
        path: '/icons',
        component: Layout,
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
    routes
})

export default router
export { routes }
