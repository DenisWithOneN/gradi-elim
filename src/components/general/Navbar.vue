<script setup>
import { RouterLink } from "vue-router";
import FilledButton from "./FilledButton.vue";

function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;


};
</script>

<template>
  <!-- normal nav -->
  <nav class="navbar_spacer navbar hidden md:block">
    <div class="flex justify-around container mx-auto pt-2">
      <div class="flex items-center">
        <img src="/src/assets/images/ELIM_LOGO.png" alt="logo" class="w-10 h-10 mx-2">
        <RouterLink to="/" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">acasă</RouterLink>
        <RouterLink to="/about" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">despre noi
        </RouterLink>
        <RouterLink to="/offer" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">ofertă
          educațională</RouterLink>
        <RouterLink to="/gallery" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">galerie
        </RouterLink>
        <RouterLink to="/schedule" class="uppercase font-semibold text-lg font-heading mx-2 text-darkblue">orar
        </RouterLink>
      </div>
      <FilledButton :bgColor='`bg-darkblue`' :text="`contact`" :size="`text-xl`" :to="`/contact`" ></FilledButton>
    </div>
  </nav>


  <!-- mobile nav -->
  <nav>
    <div class="text-3xl flex justify-between items-center cursor-pointer px-3 py-2  md:hidden lg:mx-0">
      <i class="bi bi-list text-darkblue" @click="toggleMenu"></i>
      <img src="/src/assets/images/ELIM_LOGO.png" alt="logo" class="w-8 h-8 mx-2">
    </div>

    <div>
      <ul :class="{ 'top-[50px]': isMenuOpen, 'opacity-100': isMenuOpen, 'invisible': !isMenuOpen }"
        class="bg-white min-h-screen z-[1] absolute w-full left-0 py-4 pl-7 top-[-400px] transition-all ease-in duration-500"
        :style="{ opacity: isMenuOpen ? 1 : 0 }">
        <li class="mx-4 my-6">
          <RouterLink to="/" class="text-2xl text-darkblue font-semibold ">Acasa</RouterLink>
        </li>
        <li class="mx-4 my-6 ">
          <RouterLink to="/about" class="text-2xl text-darkblue font-semibold">Despre noi</RouterLink>
        </li>
        <li class="mx-4 my-6 ">
          <RouterLink to="/offer" class="text-2xl text-darkblue font-semibold">Oferta educationala</RouterLink>
        </li>
        <li class="mx-4 my-6 ">
          <RouterLink to="/gallery" class="text-2xl text-darkblue font-semibold">Galerie</RouterLink>
        </li>
        <li class="mx-4 my-6 ">
          <RouterLink to="/schedule" class="text-2xl text-darkblue font-semibold">Orar</RouterLink>
        </li>
        
      </ul>
    </div>
  </nav>
</template>

<style></style>
