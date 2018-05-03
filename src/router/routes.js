
const Home = () => import(/* webpackChunkName: "home" */'@/views/home/index.vue');
const Home2 = () => import(/* webpackChunkName: "home2" */'@/views/home2/index.vue');

const routes = [
    {
        path: '/home',
        meta: {
            title: 'home',
            index: 0
        },
        component: Home
    },
    {
        path: '/home2',
        meta: {
            title: 'home',
            index: 0
        },
        component: Home2
    },
    {
        path: '*',
        redirect: '/home'
    }
]

export default routes;