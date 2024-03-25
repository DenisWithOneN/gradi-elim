<script setup>
import FilledButton from "../general/FilledButton.vue";
import { ref } from 'vue'
const photos = ref([
  {
    imageURL: "/src/assets/gallery-images/ZVE05696.jpg",
  },
  {
    imageURL: "/src/assets/gallery-images/ZVE05564.jpg",
  },
  {
    imageURL: "/src/assets/gallery-images/ZVE05682.jpg",
  },
  {
    imageURL: "/src/assets/gallery-images/ZVE05836.jpg",
  },

])

</script>
<template>
  <div class="galleryup spacer"></div>
  <div class="bg-green pb-5">
    <div class="container mx-auto flex flex-col justify-center items-center">
      <h2 class="text-darkblue text-5xl uppercase text-center font-black font-heading mb-5 md:text-6xl lg:text-7xl">
        galerie
      </h2>

      <!-- desktop gallery -->
      <div class="hidden lg:flex gap-4 mx-auto">
        <div class="photo1 rounded-2xl"></div>
        <div class="flex flex-col gap-4">
          <div class="photo2 h-48 xl:h-64 rounded-2xl"></div>
          <div class="flex gap-4">
            <div class="photo3 h-48 w-48 xl:w-64 xl:h-64 rounded-2xl"></div>
            <div class="grid">
              <div class="col-start-1 row-start-1 photo4 h-48 w-48 xl:w-64 xl:h-64 rounded-2xl"></div>
              <div
                class="bg-darkblue col-start-1 row-start-1 flex justify-center items-center text-white text-2xl font-body bg-opacity-50 rounded-2xl">
                vezi galerie
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- tablet/phone gallery -->
      <div class="lg:hidden flex flex-col justify-center items-center">
        <div class="lg:hidden grid sm:grid-cols-2 gap-4">
          <div v-for="(photo, index) in photos" :key="index">
            <div class="h-60 w-60 md:h-72 md:w-72 photoProps rounded-2xl"
              :style="{ backgroundImage: `url(${photo.imageURL})` }"></div>
          </div>
        </div>
        <FilledButton :text="`Galerie`" :bgColor="`bg-darkblue`" :size="`text-xl xl:text-2xl`" :to="`/gallery`" class="mt-10"></FilledButton>
      </div>

    </div>
  </div>
  <div class="gallerydown spacer"></div>
</template>
<style scoped>
.photoProps {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 1024px) {
  .photo1 {
    width: 25rem; 
    height: 25rem; 
  }
}

@media (min-width: 1280px) {
  .photo1 {
    width: 33rem; 
    height: 33rem; 
  }
}

.photo1 {
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
