<template>
  <div class="w-full bg-neutral rounded-box">
    <div class="filter flex gap-2 w-max px-2">
      <input type="radio" id="all" name="store" class="hidden peer" />
      <label for="all" class="btn bg-transparent border-transparent">Alle </label>

      <input type="radio" id="rewe" name="store" class="hidden peer" />
      <label for="rewe" class="btn bg-transparent border-transparent">
        <img
          src="@/assets/shopping-logos/rewe_logo.png"
          alt="Rewe"
          class="h-8 w-8 w-auto rounded-box"
        />
      </label>

      <input type="radio" id="dm" name="store" class="hidden peer" />
      <label for="dm" class="btn bg-transparent border-transparent">
        <img src="@/assets/shopping-logos/dm_logo.png" alt="DM" class="h-8 w-8 rounded-box" />
      </label>

      <input type="radio" id="aldi" name="store" class="hidden peer" />
      <label for="aldi" class="btn bg-transparent border-transparent">
        <img src="@/assets/shopping-logos/aldi_logo.png" alt="Aldi" class="h-8 w-8 rounded-box" />
      </label>

      <input type="radio" id="lidl" name="store" class="hidden peer" />
      <label for="lidl" class="btn bg-transparent border-transparent">
        <img src="@/assets/shopping-logos/lidl_logo.png" alt="Lidl" class="h-8 w-8 rounded-box" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
