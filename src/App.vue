<script setup lang="ts">
import Navigation from './components/layout/app-naviagtion.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <RouterView />
    <Navigation v-if="route.name !== 'login'" />
</template>

<style scoped></style>
