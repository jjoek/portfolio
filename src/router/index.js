import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../pages/Portfolio.vue'
import Infrastructure from '../pages/Infrastructure.vue'

const routes = [
    {
        path: '/',
        name: 'Portfolio',
        component: Portfolio,
    },
    {
        path: '/infrastructure',
        name: 'Infrastructure',
        component: Infrastructure,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return { top: 0 }
    },
})

export default router
