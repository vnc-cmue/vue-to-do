<template>
  <div
    :id="id.toString()"
    :class="[
      'card',
      'text-neutral-content',
      'bg-base-300',
      'my-4',
      'duration-300 ease-in-out',
      'cursor-pointer',
      'w-75',
      'transition-all duration-300 ease-in-out',

      dynmaicHeight,
    ]"
    @click.prevent="toggleCard"
  >
    <div
      :class="[
        'card-body',
        'transition-all duration-300 ease-in-out',
        { 'items-center': !openCard, 'items-start': openCard },
        { 'opacity-50': done },
      ]"
    >
      <div class="flex">
        <h2 class="card-title" :class="{'text-done': done}">{{ title }}</h2>
        <div :class="['badge', 'absolute', 'right-2', 'top-2', {'badge-error': prio}, {'badge-success': !prio}]"></div>
      </div>
      <p v-if="openCard" class="text-base-content transition-all duration-300 ease-in-out" :class="{'text-done': done}">
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
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false
  },
  done: {
    type: Boolean,
    default: false,
    required: true
  },
  prio: {
    type: Boolean,
    default: false
  }
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

<style lang="css">
.text-done {
  text-decoration: line-through!important;
}
</style>
