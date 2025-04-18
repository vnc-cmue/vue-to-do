<template>
  <nav class="absolute bottom-2 place-items-center itemsce-center w-75 bg-base-300 flex justify-around p-2 text-white">
    <RouterLink to="/home"><HomeIcon />Home</RouterLink>
    <RouterLink to="/todo"><ListIcon />Check</RouterLink>
    <RouterLink to="/shopping"><CartIcon />Einkauf</RouterLink>
    <RouterLink to="/calendar"><CalendarIcon /></RouterLink>
  </nav>
</template>


<script setup lang="ts"></script>
