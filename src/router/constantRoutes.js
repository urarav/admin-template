const Layout = () => import('@/layout/index.vue');
const constantRoutes = [
    {
        path: '/',
        name: 'index',
        redirect: '/dashboard'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/dashboard/index.vue'),
                meta: {
                    title: 'Dashboard'
                },
            },
        ]
    },
    {
        path: '/test',
        name: 'test',
        component: Layout,
        redirect: 'test/index',
        meta: {
            title: 'test'
        },
        children: [
            {
                path: 'index',
                component: () => import('@/views/test/index.vue'),
                children: [],
                meta: {
                    title: 'testNested'
                }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/error-page/404.vue')
    }
];
export default constantRoutes;
