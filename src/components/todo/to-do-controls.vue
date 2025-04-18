<template>
  <div class="grid grid-cols-2 gap-1 mx-2">
    <button @click="removeTodo(props.id)" class="btn btn-outline btn-error">Löschen</button>
    <button @click="startEditing(props.id)" class="btn btn-outline btn-warning">Bearbeiten</button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../../stores/todo'
const { removeTodo } = useTodoStore()

const { todos, editingToEdit } = useTodoStore()

//by using an interface, TS knows for sure that id is a number nott undefined
interface Props {
  id: number
}

const props = defineProps<Props>()

const startEditing = (id: number) => {
  const todo = todos.find((todo) => todo.id === id)
  if (todo) {
    editingToEdit(todo)
    const el = document.getElementById('todoModal') as HTMLInputElement
    el!.checked = true
  }
}
</script>
