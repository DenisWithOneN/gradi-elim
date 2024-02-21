<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="container mx-auto flex justify-between">
    <div>
      <RouterLink to="/" class="mx-2">acasa</RouterLink>
      <RouterLink to="/about" class="mx-2">despre noi</RouterLink>
      <RouterLink to="/offer" class="mx-2">oferta educationala</RouterLink>
      <RouterLink to="/gallery" class="mx-2">galerie</RouterLink>
      <RouterLink to="/schedule" class="mx-2">orar</RouterLink>
    </div>
    <RouterLink to="/contact">contact</RouterLink>
  </nav>
</template>
<style></style>
