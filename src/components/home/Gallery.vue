<script setup>
import FilledButton from "../general/FilledButton.vue";
</script>
<template>
  <div class="galleryup spacer"></div>
  <div class="bg-green pb-5">
    <div class="container mx-auto flex flex-col justify-center items-center">
      <h2 class="text-darkblue text-5xl uppercase text-center font-black font-heading  mb-16 md:text-6xl lg:text-7xl">
        galerie
      </h2>
      <div class="flex gap-4">
        <div style="width: 25rem; height: 25rem; 
        background-image: url('./src/assets/gallery-images/ZVE05696.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;"></div>
        <div class="flex flex-col gap-4">
          <div class="h-48" style="
        background-image: url('./src/assets/gallery-images/ZVE05564.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;"></div>
          <div class="flex gap-4">
            <div class="h-48 w-48" style="
        background-image: url('./src/assets/gallery-images/ZVE05682.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;"></div>
            <div class="h-48 w-48" style="
        background-image: url('./src/assets/gallery-images/ZVE05836.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;"></div>
          </div>
        </div>
      </div>

      <div class="text-center mt-20">
        <FilledButton :size="`text-xl xl:text-2xl`" :bgColor="`bg-darkblue`" :text="`vezi galerie`" :to="`/gallery`">
        </FilledButton>
      </div>
    </div>
  </div>
  <div class="gallerydown spacer"></div>
</template>
