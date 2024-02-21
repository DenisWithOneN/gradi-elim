<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="spacer navbar">
    <div class="flex justify-between container mx-auto pt-2">
      <div class="flex items-center">
      <img src="/src/assets/ELIM_LOGO.png" alt="logo" class="w-10 h-10">
      <RouterLink to="/" class="mx-2">acasa</RouterLink>
      <RouterLink to="/about" class="mx-2">despre noi</RouterLink>
      <RouterLink to="/offer" class="mx-2">oferta educationala</RouterLink>
      <RouterLink to="/gallery" class="mx-2">galerie</RouterLink>
      <RouterLink to="/schedule" class="mx-2">orar</RouterLink>
    </div>
    <RouterLink to="/contact" class=" flex items-center">contact</RouterLink>
    </div>
  </nav>
</template>
<style></style>
