<script setup>
import FilledButton from "../general/FilledButton.vue";
</script>
<template>
  <div class="galleryup spacer"></div>
  <div class="bg-green pb-5">
    <div class="container mx-auto">
      <h2
        class="text-5xl uppercase text-center font-black font-heading text-darkblue mb-16"
      >
        galerie
      </h2>
      <div class="flex justify-evenly">
        <img
          src="/src/assets/images/ZVE05682.jpg"
          alt="photo1"
          class="w-1/4 h-1/4"
        />
        <img
          src="/src/assets/images/ZVE05819.jpg"
          alt="photo2"
          class="w-1/4 h-1/4"
        />
        <img
          src="/src/assets/images/ZVE05758.jpg"
          alt="photo3"
          class="w-1/4 h-1/4"
        />
      </div>
      <div class="text-center mt-20">
        <FilledButton
          color="bg-darkblue"
          text="vezi galerie"
          to="/gallery"
        ></FilledButton>
      </div>
    </div>
  </div>
  <div class="gallerydown spacer"></div>
</template>
