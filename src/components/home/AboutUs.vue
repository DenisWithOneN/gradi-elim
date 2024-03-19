<script setup>
import FilledButton from "../general/FilledButton.vue";
const items = [
  {
    title: "Creşterea",
    text: "prestigiului grădiniţei prin aşezarea copilului şi a preocupărilor sale în centrul activităţii educaţionale.",
  },
  {
    title: "Formarea",
    text: "şi întărirea motivaţiei preşcolarului pentru învăţarea şi informarea continuă.",
  },
  {
    title: "Sprijinirea",
    text: "copiilor cu deficienţe.",
  },
  {
    title: "Diversitatea",
    text: "prin accesibilitatea la educaţie în instituţiile noastre pentru toate grupurile etnice.",
  },
  {
    title: "Asigurarea",
    text: "celor mai moderne condiţii pentru realizarea educaţiei grupurilor de copii defavorizaţi social.",
  },
  {
    title: "Menţinerea,",
    text: "modernizarea şi optimizarea continuă a procesului instructiv-educativ, atât din punct de vedere a calităţii actului didactic cât şi a bazei tehnico-didactice.",
  },
];
</script>
<template>
  <!-- background -->
  <div class="aboutup spacer"></div>
  <div class="bg-lightblue">
    <div class="container mx-auto flex flex-col items-center">
      <h2
        class="text-darkblue text-5xl text-center font-black font-heading uppercase md:text-6xl lg:text-7xl">
        misiune & viziune
      </h2>
      <p class="text-white text-sm sm:text-lg md:text-xl xl:text-2xl text-center font-body max-w-sm md:max-w-lg mx-5 lg:max-w-4xl">
        Grădiniţa noastră are o experienţă bogată în educaţiei la vârstă
        fragedă, în formarea unor deprinderi intelectuale şi abilităţi practice
        la copil, în funcţie de particularităţile de vârstă, la care putem
        adăuga aspecte ale moralei creştine şi ale educaţiei inter-culturale.
      </p>

      <div class="flex flex-wrap justify-center lg:mt-5">
        <div v-for="(item, index) in items" :key="index" class="bg-yellow rounded-2xl drop-shadow-aboutCard w-60 h-44 md:w-72 md:h-80 m-5 p-5">
          <p class="text-darkblue text-3xl md:text-4xl font-body">{{ item.title }}</p>
          <p class="text-darkblue text-sm  md:text-xl xl:text-2xl font-body">{{ item.text }}</p>
        </div>
      </div>
      <FilledButton :text="`despre noi`" :bgColor="`bg-darkblue`" :size="`text-xl xl:text-2xl`" :to="`/about`" class="mt-10"></FilledButton>
    </div>
  </div>
  <!-- /background -->
  <div class="aboutdown spacer"></div>
</template>
