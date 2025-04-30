<template>
  <div class="place-items-center my-5">
    <div class="flex flex-row mx-2 gap-1 justify-center">
      <fieldset class="fieldset w-full">
        <input type="text" class="input" placeholder="Ich brauche..." />
      </fieldset>
      <div class="dropdown dropdown-top">
        <div tabindex="0" role="button" class="btn btn-primary btn-outline m-1 rounded-box">
          Laden
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-neutral rounded-box z-1 w-auto p-2 shadow-sm"
        >
          <li><a>Rewe</a></li>
          <li><a>DM</a></li>
          <li><a>Lidl</a></li>
          <li><a>Aldi</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-1"><button class="btn btn-success">+</button></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
