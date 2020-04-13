import Home from '@/pages/home'


export default {
    mode: 'history',
    base: '',// process.env.BASE_URL,
    routes: [
        {
            path: '/test',
            name: 'test',
            component: () => import('@/pages/test'),
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/preview',
            name: 'home_preview',
            component: Home,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/product/:page',
            name: 'productPage',
            component: () => import('@/pages/product/_page'),
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/solution/:page',
            name: 'solutionPage',
            component: () => import('@/pages/solution/_page'),
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/errorPage',
            name: 'errorPage',
            component: () => import('@/layouts/errorPage')
        },
        {
            path: '/redirect',
            name: 'redirect',
            component: () => import('@/layouts/redirect')
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: () => import('@/layouts/notFound')
        },
        {
            path: '/demos/:page',
            name: 'demosPage',
            component: () => import('@/pages/demos/_page'),
            meta: {
                requiresAuth: false,
            },
        },
    ],
}