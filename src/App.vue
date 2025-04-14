<script setup lang="ts">
import todoForm from './components/to-do-form.vue'
import todoList from './components/to-do-list.vue'
import todoFilter from './components/to-do-filter.vue'
import todoTab from './components/to-do-tab.vue'
import todoModal from './components/to-do-modal.vue'
</script>

<template>
  <main class="max-w-screen-lg mx-auto px-4">
    <div class="flex flex-col place-items-center my-5">
      <div>
        <todoTab />
      </div>
      <!-- <div>
        <todoForm />
      </div> -->
      <div>
        <todoFilter />
      </div>
    </div>
    <div class="grid grid-row px-4 gap-4">
      <todoList />
    </div>
    <todoModal />

    <div class="fixed bottom-8 right-8 z-50">
      <label for="todoModal" class="btn btn-success w-16 h-16 text-xl">＋</label>
    </div>
  </main>
</template>

<style scoped></style>
