import { createRouter, createWebHistory } from 'vue-router'
import Playground from '../views/Playground.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'playground',
      component: Playground
    }
  ]
})

export default router
