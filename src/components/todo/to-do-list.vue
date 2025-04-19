<template>
  <div  v-for="todo in store.todos" :key="todo.id" class="flex justify-center">
    <todoItem :id="todo.id" :title="todo.title" :done="todo.done" :text="todo.text" :prio="todo.prio" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import todoItem from './to-do-item.vue'
import { useTodoStore } from '../../stores/todo'

const store = useTodoStore()

onMounted(() => {
  store.loadTodos()
})
</script>
