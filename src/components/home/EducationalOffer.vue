<script setup>
import FilledButton from "../general/FilledButton.vue";

const offers = [
  {
    icon: "bi bi-pencil",
    title: "Curriculum la<br>decizia grădiniței",
    details: ["Limba engleză", "Educație religioasă"],
  },
  {
    icon: "bi bi-pencil",
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
    icon: "bi bi-pencil",
    title: "Activități<br>extracurriculare",
    details: ["Resurse umane", "Resurse materiale"],
  },
];
</script>
<template>
  <section class="flex flex-col items-center">
    <h2
      class="text-5xl text-center font-semibold uppercase font-heading text-yellow"
    >
      oferta educațională
    </h2>
    <p class="text-xl w-1/2 text-center font-body text-darkblue">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam,
      similique voluptatem provident enim nulla corporis magnam odio velit quo
      repudiandae facere? Quisquam laborum eos molestiae culpa eius beatae vero!
    </p>

    <!-- content container -->
    <div
      class="flex border-4 border-green border-dashed rounded-3xl container px-auto py-20 my-14"
    >
      <div
        v-for="(offer, index) in offers"
        :key="index"
        class="flex flex-col items-center container mx-auto"
      >
        <i :class="offer.icon" class="text-4xl mb-2 text-lightblue"></i>
        <h3
          class="text-4xl font-semibold mb-2 text-center text-lightblue"
          v-html="offer.title"
        ></h3>
        <div class="flex flex-col">
          <p
            v-for="(detail, detailIndex) in offer.details"
            :key="detailIndex"
            class="text-xl font-body text-center text-lightblue"
          >
            {{ detail }}
          </p>
        </div>
      </div>
    </div>

    <!-- /content container -->
    <FilledButton
      color="bg-darkblue"
      text="oferta întreagă"
      to="/offer"
    ></FilledButton>
  </section>
</template>
