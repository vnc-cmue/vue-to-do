<script setup lang="ts">
import todoForm from './components/to-do-form.vue'
import todoList from './components/to-do-list.vue'
import todoFilter from './components/to-do-filter.vue'
</script>

<template>
  <main class="max-w-screen-lg mx-auto px-4">
    <div class="flex flex-col place-items-center my-5">
      <div>
        <todoForm />
      </div>
      <div>
        <todoFilter />
      </div>
    </div>
    <div class="grid grid-row px-4 gap-4">
      <todoList />
    </div>
  </main>
</template>

<style scoped></style>
