<template>
  <div>
    <fieldset class="fieldset w-xs bg-base-100 border border-primary p-4 rounded-box">
      <legend class="fieldset-legend">To-Do erstellen</legend>
      <div class="join">
        <input
          @keyup.enter="saveHandler()"
          type="text"
          class="input join-item border-primary"
          placeholder="Aufgabe"
          v-model="userInputTitle"
        />
      </div>
      <div>
        <input
          @keyup.enter="saveHandler()"
          type="text"
          class="input join-item border-primary"
          placeholder="Text"
          v-model="userInputText"
        />
      </div>
      <div>
        <input type="datetime-local" class="input" v-model="userInputDate" />
      </div>
      <button
        @click="saveHandler()"
        class="btn btn-soft btn-secondary"
      >
        Sichern
      </button>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodoStore } from '../stores/todo'

const props = defineProps<{
  editingTodo?: { id: number; title: string; text: string }
}>()

const userInputTitle = ref<string>('')
const userInputText = ref<string>('')
const userInputDate = ref<Date>()
const { addTodo, updateTodo } = useTodoStore()

const saveHandler = () => {
  if (props.editingTodo) {
    updateTodo({ id: props.editingTodo.id, title: userInputTitle.value, text: userInputText.value })
  } else {
    addTodo(userInputTitle.value, userInputText.value)
  }

  userInputTitle.value = ''
  userInputText.value = ''
}

watch(
  () => props.editingTodo,
  (newVal) => {
    if (newVal) {
      userInputTitle.value = newVal.title
      userInputText.value = newVal.text
    }
  },
  { immediate: false },
)
</script>

<style scoped></style>
