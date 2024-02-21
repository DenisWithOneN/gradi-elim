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
  <span class="bg-lightblue">
    <div class="container mx-auto flex justify-around">
      <img
        src="https://picsum.photos/2000"
        alt="misiune&viziune"
        class="rounded-3xl"
        style="height: 33rem"
      />


      <!-- right content -->
      <div class="w-1/2 pl-5 pb-3">
        <h2 class="text-4xl uppercase font-semibold text-yellow">
          misiune <br />& viziune
        </h2>
        <p class="text-lg text-darkblue">
          Grădiniţa noastră are o experienţă bogată în promovarea educaţiei la
          vârstă fragedă , în formarea unor deprinderi intelectuale şi abilităţi
          practice la copil, în funcţie de particularităţile de vârstă, la care
          putem adăuga aspecte ale moralei creştine şi ale educaţiei
          inter-culturale.
        </p>
        <!-- checkmarks -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex my-5 items-start"
        >
          <span class="text-yellow"
            ><i class="bi bi-check-circle-fill text-3xl"></i
          ></span>
          <p class="text-md pl-2 text-darkblue">{{ item.text }}</p>
        </div>
        <!-- /checkmarks -->
        <FilledButton
          text="despre noi"
          color="bg-yellow"
          to="/about"
        ></FilledButton>
      </div>
      <!-- /right content -->
    </div>
  </span>
  <div class="aboutdown spacer"></div>
</template>
