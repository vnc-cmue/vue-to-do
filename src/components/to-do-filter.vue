<template>
  <form class="filter mt-5">
    <input class="btn btn-error" type="reset" value="×" />
    <input @click="filterTodo(false)" class="btn btn-outline btn-warning" type="radio" name="frameworks" aria-label="Alle" />
    <input @click="filterTodo(true)" class="btn btn-outline btn-warning" type="radio" name="frameworks" aria-label="Offen" />
    <input
      class="btn btn-outline btn-warning"
      type="radio"
      name="frameworks"
      aria-label="Erledigt"
    />
  </form>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/todo'

const { filterTodo } = useTodoStore()

</script>
