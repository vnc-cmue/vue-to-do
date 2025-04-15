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
      'w-full',
      'transition-all duration-300 ease-in-out',
      { 'bg-base-100': done },
      { 'bg-base-100': !done },
      dynmaicHeight,
    ]"
    @click.prevent="toggleCard"
  >
    <div
      :class="[
        'card-body',
        'transition-all duration-300 ease-in-out',
        { 'items-center': !openCard, 'items-start': openCard },
      ]"
    >
      <h2 class="card-title">{{ title }}</h2>
      <p v-if="openCard" class="text-base-content transition-all duration-300 ease-in-out">
        {{ text }}
      </p>
    </div>
    <div v-if="openCard">
      <toDoControls :id="id" />
    </div>
    <div class="card-actions justify-center my-2">
      <button
        :style="{ width: done ? '25%' : '95%' }"
        class="btn transition-all duration-300 ease-in-out"
        :class="done ? 'btn-error' : 'btn-success'"
        @click.stop="toggleDoneStatus(id)"
      >
        {{ done ? 'X' : '✓' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/todo'
import toDoControls from './to-do-controls.vue'
import { ref, computed } from 'vue'

const { toggleDoneStatus } = useTodoStore()

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

const dynmaicHeight = computed(() => {
  if (!openCard.value) return 'h-24'
  if (props.text && props.text.length > 1) return 'h-72'
  return 'h-48'
})
</script>
