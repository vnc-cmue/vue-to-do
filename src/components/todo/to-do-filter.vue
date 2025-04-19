<template>
  <form class="filter mt-5">
    <input @click="filterTodo(false, false)" class="btn btn-error" type="reset" value="×" />
    <input
      @click="filterTodo(false, false)"
      class="btn btn-outline btn-warning"
      type="radio"
      name="frameworks"
      aria-label="Alle"
    />
    <input
      @click="filterTodo(true, true)"
      class="btn btn-outline btn-warning"
      type="radio"
      name="frameworks"
      aria-label="Offen"
    />
    <input
      @click="filterTodo(false, true)"
      class="btn btn-outline btn-warning"
      type="radio"
      name="frameworks"
      aria-label="Erledigt"
    />
    <input
      @click="filterTodo(false, true)"
      class="btn btn-outline btn-warning"
      type="radio"
      name="frameworks"
      aria-label="Wichtig"
    />
  </form>
</template>

<script setup lang="ts">
import { useTodoStore } from '../../stores/todo'

const { filterTodo } = useTodoStore()
</script>
