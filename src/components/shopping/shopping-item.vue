<template>
  <div>
    <img v-if="logoSrc" class="size-12 rounded-box" :src="logoSrc" />
  </div>
  <div class="">
    <h3>{{ props.name }}</h3>
    <span class="flex">
      <p class="text-xs uppercase font-semibold opacity-60 pr-2">{{ props.quantity }}</p>
      <p class="text-xs uppercase font-semibold opacity-60">{{ props.unit }}</p>
    </span>
  </div>
  <div class="">
    <button class="btn btn-error btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </g>
      </svg>
    </button>
    <button class="btn btn-warning btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          ></path>
        </g>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
  unit: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  store_id: {
    type: Number,
  },
})

const storeLogos: Record<number, string> = {
  1: new URL('@/assets/shopping-logos/rewe_logo.png', import.meta.url).href,
  2: new URL('@/assets/shopping-logos/dm_logo.png', import.meta.url).href,
  3: new URL('@/assets/shopping-logos/lidl_logo.png', import.meta.url).href,
  4: new URL('@/assets/shopping-logos/aldi_logo.png', import.meta.url).href,
}

const defaultLogo = new URL('@/assets/shopping-logos/default_logo.png', import.meta.url).href

const logoSrc = computed(() =>
  props.store_id && storeLogos[props.store_id] ? storeLogos[props.store_id] : defaultLogo,
)
</script>
