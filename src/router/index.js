import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../Portfolio.vue'
import Infrastructure from '../components/Infrastructure.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Portfolio
  },
  {
    path: '/infrastructure',
    name: 'Infrastructure',
    component: Infrastructure
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 