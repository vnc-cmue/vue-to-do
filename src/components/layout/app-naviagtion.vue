<template>
  <nav
    class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-neutral rounded-xl shadow-lg flex justify-around py-3 px-4 text-white z-50"
  >
    <RouterLink class="transition-all duration-300 ease-in-out" :class="['tooltip', 'tooltip-top', { 'active bg-info': route.path === '/home' }]" to="/home" data-tip="Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
        />
      </svg>
    </RouterLink>

    <RouterLink class="transition-all duration-300 ease-in-out"  :class="['tooltip', 'tooltip-top', { 'active bg-info': route.path === '/todo' }]" to="/todo" data-tip="To-Do">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12h6m-6 4h6M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    </RouterLink>

    <RouterLink class="transition-all duration-300 ease-in-out" :class="['tooltip', 'tooltip-top', { 'active bg-info': route.path === '/shopping' }]" to="/shopping" data-tip="Einkauf">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13m-9 0a1 1 0 102 0m-4 0a1 1 0 102 0"
        />
      </svg>
    </RouterLink>

    <RouterLink class="transition-all duration-300 ease-in-out" :class="['tooltip', 'tooltip-top', { 'active bg-info': route.path === '/calendar' }]" to="/calendar" data-tip="Kalender">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10m2 10H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
        />
      </svg>
    </RouterLink>
  </nav>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<style lang="css">
.tooltip {
  padding: 10px;
}

.active {
    /* border: 2px solid transparent; */
    border-radius: 50%;
  }
</style>
