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
        class="text-darkblue text-4xl text-center font-black font-heading uppercase sm:text-5xl md:text-6xl lg:text-7xl">
        misiune & viziune
      </h2>
      <p class="text-white text-sm text-center font-body max-w-sm mx-5 md:text-xl lg:max-w-4xl">
        Grădiniţa noastră are o experienţă bogată în educaţiei la vârstă
        fragedă, în formarea unor deprinderi intelectuale şi abilităţi practice
        la copil, în funcţie de particularităţile de vârstă, la care putem
        adăuga aspecte ale moralei creştine şi ale educaţiei inter-culturale.
      </p>

      <div class="flex flex-wrap justify-center mt-10">
        <div v-for="(item, index) in items" :key="index" class="bg-yellow rounded-2xl drop-shadow-aboutCard w-72 h-60 m-5 p-5">
          <p class="text-darkblue text-3xl font-body">{{ item.title }}</p>
          <p class="text-darkblue text-lg font-body">{{ item.text }}</p>
        </div>
      </div>
      <FilledButton :text="`despre noi`" :bgColor="`bg-darkblue`" :size="`text-xl xl:text-2xl`" :to="`/about`" class="mt-10"></FilledButton>
    </div>
  </div>
  <!-- /background -->
  <div class="aboutdown spacer"></div>
</template>
