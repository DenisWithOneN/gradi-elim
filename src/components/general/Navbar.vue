<script setup>
import { RouterLink } from "vue-router";
import FilledButton from "./FilledButton.vue";
</script>
<template>
  <!-- normal nav -->
  <nav class="navbar_spacer navbar hidden md:block">
    <div class="flex justify-between container mx-auto pt-2">
      <div class="flex items-center">
      <img src="/src/assets/images/ELIM_LOGO.png" alt="logo" class="w-10 h-10 mx-2">
      <RouterLink to="/" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">acasă</RouterLink>
      <RouterLink to="/about" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">despre noi</RouterLink>
      <RouterLink to="/offer" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">ofertă educațională</RouterLink>
      <RouterLink to="/gallery" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">galerie</RouterLink>
      <RouterLink to="/schedule" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">orar</RouterLink>
    </div>
    <FilledButton color="bg-darkblue" text="contact" to="/contact"></FilledButton>
    </div>
  </nav>

  <!-- mobile nav -->
  <nav class="flex md:hidden items-center my-5 justify-evenly">
    <RouterLink to="/" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue bg-lightblue rounded-full px-2">acasă</RouterLink>
    <p class="text-sm font-body text-gray-300">mai multe pagini curand...</p>
  </nav>
</template>
<style></style>
