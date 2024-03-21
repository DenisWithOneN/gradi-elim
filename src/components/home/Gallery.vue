<script setup>
import FilledButton from "../general/FilledButton.vue";
</script>
<template>
  <div class="galleryup spacer"></div>
  <div class="bg-green pb-5">
    <div class="container mx-auto flex flex-col justify-center items-center">
      <h2 class="text-darkblue text-5xl uppercase text-center font-black font-heading mb-16 md:text-6xl lg:text-7xl">
        galerie
      </h2>
      <div class="flex gap-4">
        <div class="photo1 rounded-2xl"></div>
        <div class="flex flex-col gap-4">
          <div class="photo2 h-48 rounded-2xl"></div>
          <div class="flex gap-4">
            <div class="photo3 h-48 w-48 rounded-2xl"></div>
            <div class="grid">
              <div class="col-start-1 row-start-1 photo4 h-48 w-48 rounded-2xl"></div>
              <div
                class="bg-darkblue col-start-1 row-start-1 flex justify-center items-center text-white text-2xl font-body bg-opacity-50 rounded-2xl">
                vezi galerie
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  <div class="gallerydown spacer"></div>
</template>
<style scoped>
.photo1 {
  width: 25rem;
  height: 25rem;
  background-image: url("./src/assets/gallery-images/ZVE05696.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.photo2 {
  background-image: url("./src/assets/gallery-images/ZVE05564.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.photo3 {
  background-image: url("./src/assets/gallery-images/ZVE05682.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.photo4 {
  background-image: url("./src/assets/gallery-images/ZVE05836.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
