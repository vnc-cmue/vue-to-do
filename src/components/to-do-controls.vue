<template>
  <div class="grid grid-cols-2 gap-1 mx-2">
    <button @click="removeTodo(id)" class="btn btn-outline btn-error">Löschen</button>
    <button @click="startEditing(id)" class="btn btn-outline btn-warning">Bearbeiten</button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/todo'
const { removeTodo } = useTodoStore()

const { todos, editingToEdit } = useTodoStore()

defineProps({
  id: {
    type: Number,
  },
})

const startEditing = (id: number) => {
  const todo = todos.find((t) => t.id === id)
  if (todo) {
    editingToEdit(todo)
    document.getElementById('todoModal')!.checked = true
  }
}
</script>
