<template>
  <div>
    <fieldset class="fieldset w-xs bg-base-100 border border-primary p-4 rounded-box">
      <legend class="fieldset-legend">
        {{ editingTodo ? 'To-Do bearbeiten' : 'To-Do erstellen' }}
      </legend>

      <div class="mb-3">
        <label class="floating-label">
          <input
            @keyup.enter="saveHandler"
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
            @keyup.enter="saveHandler"
            type="text"
            class="input join-item border-primary"
            placeholder="Beschreibung"
            v-model="userInputText"
          />
          <span>Beschreibung</span>
        </label>
      </div>

      <div class="flex items-center mb-3">
        <h3 class="mr-5">Priorität</h3>
        <label class="mr-5">
          <input type="checkbox" v-model="userInputPrio" class="checkbox checkbox-primary mr-2" />
          <span>Hoch</span>
        </label>
      </div>

      <button @click="saveHandler" class="btn btn-success">
        {{ editingTodo ? 'Aktualisieren' : 'Sichern' }}
      </button>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()

const editingTodo = computed(() => todoStore.edit)

const userInputTitle = ref('')
const userInputText = ref('')
const userInputPrio = ref(false)

const saveHandler = () => {
  if (editingTodo.value) {
    todoStore.updateTodo({
      id: editingTodo.value.id,
      title: userInputTitle.value,
      text: userInputText.value,
      prio: userInputPrio.value
    })
    todoStore.clearEdit()
    closeModal()
  } else {
    todoStore.addTodo(userInputTitle.value, userInputText.value, userInputPrio.value)
  }

  clearInputs()
}

const closeModal = () => {
  const modal = document.getElementById('todoModal') as HTMLInputElement
  if (modal) modal.checked = false
}

const clearInputs = () => {
  userInputTitle.value = ''
  userInputText.value = ''
  userInputPrio.value = false
}

watch(
  () => editingTodo.value,
  (newVal) => {
    if (newVal) {
      userInputTitle.value = newVal.title
      userInputText.value = newVal.text
      userInputPrio.value = newVal.prio
    } else {
      clearInputs()
    }
  },
  { immediate: true }
)
</script>
