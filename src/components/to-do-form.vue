<template>
  <div>
    <fieldset class="fieldset w-xs bg-base-100 border border-primary p-4 rounded-box">
      <legend class="fieldset-legend">To-Do erstellen</legend>
      <div class="join">
        <input
          @keyup.enter="addTodoHandler(userInputTitle, userInputText)"
          type="text"
          class="input join-item border-primary"
          placeholder="Aufgabe"
          v-model="userInputTitle"
        />
      </div>
      <div>
        <input
          @keyup.enter="addTodoHandler(userInputTitle, userInputText)"
          type="text"
          class="input join-item border-primary"
          placeholder="Text"
          v-model="userInputText"
        />
      </div>
      <div>
        <input type="datetime-local" class="input"/>
      </div>
      <button
        @click="addTodoHandler(userInputTitle, userInputText)"
        class="btn btn-soft btn-secondary"
      >
        Sichern
      </button>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo'

const userInputTitle = ref<string>('')
const userInputText = ref<string>('')
const { addTodo } = useTodoStore()

const addTodoHandler = (title: string, text: string) => {
  if (title.trim()) {
    addTodo(title, text)
    userInputTitle.value = ''
    userInputText.value = ''
  }
}
</script>

<style scoped></style>
