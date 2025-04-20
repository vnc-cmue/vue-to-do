<template>
  <TransitionGroup name="list" tag="div" class="space-y-2">
    <div v-for="todo in todosShow" :key="todo.id" class="flex justify-center">
      <todoItem
        :id="todo.id"
        :title="todo.title"
        :done="todo.done"
        :text="todo.text"
        :prio="todo.prio"
      />
    </div>
  </TransitionGroup>
  <div>
    <div class="fixed bottom-26 right-2 z-50">
      <label for="todoModal" class="btn btn-info w-16 h-16 text-xl">＋</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import todoItem from './to-do-item.vue'
import { useTodoStore } from '../../stores/todo'

const store = useTodoStore()

const todosShow = computed(() => {
  return store.isFiltered ? store.filtered : store.todos
})

onMounted(() => {
  store.loadTodos()
})
</script>

<style scoped>
.list-move {
  transition: transform 0.3s ease;
}
</style>
