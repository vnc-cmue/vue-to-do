<script setup lang="ts">
import todoList from '@/components/todo/to-do-list.vue'
import todoFilter from '@/components/todo/to-do-filter.vue'
import todoTab from '@/components/layout/app-naviagtion.vue'
import todoModal from '@/components/todo/to-do-modal.vue'
import todoHeader from '@/components/todo/to-do-header.vue'
</script>

<template>
  <main class="max-w-screen-lg mx-auto px-4">
    <div class="flex flex-col place-items-center my-5">
      <div>
        <todoHeader />
      </div>
      <div>
        <todoTab />
      </div>
      <div>
        <todoFilter />
      </div>
    </div>
    <div class="grid grid-row px-4 gap-4 mb-32">
      <todoList />
    </div>
    <todoModal />

  </main>
</template>

<style scoped></style>
