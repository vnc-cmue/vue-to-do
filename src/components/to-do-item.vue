<template>
  <div
    :id="id.toString()"
    :class="[
      'card',
      'text-neutral-content',
      'mx-5',
      'my-4',
      'duration-300 ease-in-out',
      'cursor-pointer',
      'w-52',
      'transition-all duration-300 ease-in-out',
      { 'bg-primary-content': done },
      { 'bg-primary-content': !done },
      { 'h-24': !openCard, 'h-82': openCard },
    ]"
    @click.prevent="toggleCard"
  >
    <div v-if="openCard" class="relative mb-5">
      <button @click="removeAndLog(id)" class="absolute btn btn-error w-12 top-2 right-2 size-6">X</button>
    </div>
    <div
      :class="[
        'card-body',
        'transition-all duration-300 ease-in-out',
        { 'items-center': !openCard, 'items-start': openCard },
      ]"
    >
      <h2 class="card-title">{{ title }}</h2>
      <p v-if="openCard" class="text-base-content transition-all duration-300 ease-in-out">{{ text }}</p>
    </div>
    <div class="card-actions justify-start">
      <button v-if="!done" class="btn btn-success mt-2 w-full" @click.stop="toggleDoneStatus(id)">
        ✓
      </button>
      <button v-else @click.stop="toggleDoneStatus(id)" class="btn btn-warning mt-2 w-full">
        X
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/todo'
import { ref } from 'vue'

const { toggleDoneStatus, removeTodo } = useTodoStore()

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  done: {
    type: Boolean,
    default: false,
    required: true,
  },
})

const openCard = ref(false)

const toggleCard = () => {
  openCard.value = !openCard.value
}

const removeAndLog = (id: number) => {
  console.log('Entferne Todo mit ID:', id)
  removeTodo(id)
}
</script>
