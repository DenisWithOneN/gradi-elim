<script setup>
import FilledButton from "../general/FilledButton.vue";
const items = [
  {
    text: "Creşterea prestigiului grădiniţei prin aşezarea copilului şi a preocupărilor sale în centrul activităţii educaţionale.",
  },
  {
    text: "Formarea şi întărirea motivaţiei preşcolarului pentru învăţarea şi informarea continuă.",
  },
  {
    text: "Sprijinirea copiilor cu deficienţe.",
  },
  {
    text: "Diversitatea prin accesibilitatea la educaţie în instituţiile noastre pentru toate grupurile etnice.",
  },
  {
    text: "Asigurarea celor mai moderne condiţii pentru realizarea educaţiei grupurilor de copii defavorizaţi social.",
  },
  {
    text: "Menţinerea, modernizarea şi optimizarea continuă a procesului instructiv-educativ, atât din punct de vedere a calităţii actului didactic cât şi a bazei tehnico-didactice.",
  },
];
</script>
<template>
  <div class="aboutup spacer"></div>
  <div class="bg-lightblue">
    <div class="container mx-auto flex justify-around items-center">
      <img
        src="https://picsum.photos/2000"
        alt="misiune&viziune"
        class="rounded-3xl mb-3"
        style="height: 33rem"
      />

      <!-- right content -->
      <div class="w-1/2 pl-5 pb-3">
        <h2 class="text-5xl uppercase font-black font-heading text-yellow">
          misiune <br />& viziune
        </h2>
        <p class="text-xl font-body text-white">
          Grădiniţa noastră are o experienţă bogată în educaţiei la vârstă
          fragedă, în formarea unor deprinderi intelectuale şi abilităţi
          practice la copil, în funcţie de particularităţile de vârstă, la care
          putem adăuga aspecte ale moralei creştine şi ale educaţiei
          inter-culturale.
        </p>
        <!-- checkmarks -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex my-5 items-center"
        >
          <div class="text-darkblue">
            <i class="bi bi-check-circle-fill text-4xl"></i>
          </div>
          <p class="text-xl pl-2 font-body text-white">{{ item.text }}</p>
        </div>
        <FilledButton
          text="despre noi"
          color="bg-yellow"
          to="/about"
        ></FilledButton>
        <!-- /checkmarks -->
      </div>
      <!-- /right content -->
    </div>
  </div>
  <div class="aboutdown spacer"></div>
</template>
