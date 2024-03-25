<script setup>
import FilledButton from "../general/FilledButton.vue";

const offers = [
  {
    icon: "bi bi-book",
    title: "Curriculum la<br>decizia grădiniței",
    details: ["Limba engleză", "Educație religioasă"],
  },
  {
    icon: "bi bi-globe",
    title: "Domenii<br>experiențiale",
    details: [
      "Domeniul științe",
      "Domeniul limbă și comunicare",
      "Domeniul om și societate",
      "Domeniul estetic și creativ",
      "Domeniul psihomotric",
    ],
  },
  {
    icon: "bi bi-palette-fill",
    title: "Activități<br>extracurriculare",
    details: ["Resurse umane", "Resurse materiale"],
  },
];
</script>
<template>
  <section class="mx-auto flex flex-col items-center ">
    <div class="flex flex-col items-center mb-10">
      <h2
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-black uppercase font-heading text-yellow px-10 mb-5">
        oferta educațională
      </h2>
      <p class="text-xl px-10 sm:px-20 lg:px-0 lg:w-1/2 text-center font-body text-darkblue">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam,
        similique voluptatem provident enim nulla corporis magnam odio velit quo
        repudiandae facere? Quisquam laborum eos molestiae culpa eius beatae vero!
      </p>
    </div>

    <!-- content container -->
    <div class="container mx-auto mb-10">
      <div
        class="flex flex-col md:flex-row md:flex-wrap items-center justify-center mx-10 gap-20 md:p-10 md:py-40 md:border-4 md:border-dashed md:border-green md:rounded-2xl">
        <div v-for="(offer, index) in offers" :key="index"
          class="drop-shadow-offerCard bg-white w-64 h-72 sm:w-80 sm:h-96 md:w-96 flex flex-col items-center  p-5 rounded-2xl gap-2">
          <div class="bg-lightblue p-5 px-6 rounded-full"><i
              class="bi rounded-full text-4xl text-white text-center" :class="offer.icon"></i></div>
          <p v-html="offer.title"
            class="text-darkblue font-heading text-center text-2xl sm:text-3xl md:text-4xl font-semibold"></p>
          <div class="text-darkblue flex flex-col font-body items-center text-sm sm:text-lg md:text-xl xl:text-2xl  ">
            <p v-for="(row, index) in offer.details" :key="index" class="text-center leading-5 md:leading-6">{{ row }}
            </p>
          </div>
        </div>

      </div>

    </div>

    <!-- /content container -->
    <FilledButton :text="`intreaga oferta`" :bgColor="`bg-darkblue`" :size="`text-xl xl:text-2xl`" :to="`/offer`"
      class="mt-10"></FilledButton>
  </section>
</template>
