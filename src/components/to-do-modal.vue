<template>
  <input type="checkbox" id="todoModal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label for="todoModal" class="btn btn-sm btn-circle absolute right-2 top-2">X</label>
      <todoForm :editingTodo="edit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import todoForm from './to-do-form.vue'
import { useTodoStore } from '../stores/todo'

const store  = useTodoStore()
const edit = computed(() =>
  store.edit === null ? undefined : store.edit
)

</script>
