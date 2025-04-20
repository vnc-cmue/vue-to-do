import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/login-view.vue'
import Shopping from '@/views/shopping-view.vue'
import Todo from '@/views/todo-view.vue'
import Home from '@/views/home-view.vue'
import Calendar from '@/views/calendar-view.vue'

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
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar,
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
