<template>
  <div>
    <fieldset class="fieldset w-xs bg-base-100 border border-primary p-4 rounded-box">
      <legend class="fieldset-legend">To-Do erstellen</legend>
      <div class="mb-3">
        <label class="floating-label">
          <input
            @keyup.enter="saveHandler()"
            type="text"
            class="input join-item border-primary"
            placeholder="Aufgabe"
            v-model="userInputTitle"
          />
          <span>Aufgabe</span>
        </label>
      </div>
      <div class="mb-3">
        <label class="floating-label">
          <input
            @keyup.enter="saveHandler()"
            type="text"
            class="input join-item border-primary"
            placeholder="Beschreibung"
            v-model="userInputText"
          />
          <span>Beschreibung</span>
        </label>
      </div>

      <div class="flex justify-center mb-3">
        <h3 class="mr-5">Priorität</h3>
        <label class="mr-5">
          <input type="checkbox" v-model="userInputPrio" class="checkbox checkbox-primary mr-2" />
          <span>Hoch</span>
        </label>
      </div>
      <div>
        <input type="datetime-local" class="input mb-3" v-model="userInputDate" />
      </div>
      <button @click="saveHandler()" class="btn btn-success">Sichern</button>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodoStore } from '../stores/todo'

const props = defineProps<{
  editingTodo?: { id: number; title: string; text: string; prio: boolean }
}>()

const userInputTitle = ref<string>('')
const userInputText = ref<string>('')
const userInputPrio = ref<boolean>(false)
const userInputDate = ref<Date>()
const { addTodo, updateTodo } = useTodoStore()

const saveHandler = () => {
  if (props.editingTodo) {
    updateTodo({
      id: props.editingTodo.id,
      title: userInputTitle.value,
      text: userInputText.value,
      prio: userInputPrio.value,
    })
    //clodse Modal if checked
    const modal = document.getElementById('todoModal') as HTMLInputElement
    if (modal) modal.checked = false
  } else {
    addTodo(userInputTitle.value, userInputText.value, userInputPrio.value)
  }

  userInputTitle.value = ''
  userInputText.value = ''
  userInputPrio.value = false
}

watch(
  () => props.editingTodo,
  (newVal) => {
    if (newVal) {
      userInputTitle.value = newVal.title
      userInputText.value = newVal.text
      userInputPrio.value = newVal.prio
    }
  },
  { immediate: false },
)
</script>

<style scoped></style>
