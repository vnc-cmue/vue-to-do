import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/login-view.vue'
import Shopping from '@/views/shopping-view.vue'
import Todo from '@/views/todo-view.vue'
import Home from '@/views/home-view.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: Shopping,
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo,
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
