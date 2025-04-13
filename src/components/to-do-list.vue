<template>
  <div v-for="todo in store.todos" :key="todo.id" class="place-items-center">
    <todoItem :id="todo.id" :title="todo.title" :done="todo.done" :text="todo.text" />
  </div>
</template>

<script setup lang="ts">
import todoItem from './to-do-item.vue'
import { useTodoStore } from '../stores/todo'

const store = useTodoStore()
</script>
