<script setup>
import FilledButton from "../general/FilledButton.vue";
</script>
<template>
  <div class="container mx-auto flex justify-around">
    <!-- left side content -->
    <div class="w-1/2 flex flex-col border-2">
      <p class="text-sm uppercase text-darkblue">gradinita elim hotar</p>
      <h1 class="text-5xl uppercase text-yellow">
        bine ai venit <br />
        gradi elim
      </h1>
      <p class="text-md text-darkblue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        facilis magnam! Maiores, corrupti sunt dolor molestias vero, quo ullam
        facere explicabo, quaerat ut iure perspiciatis mollitia asperiores
        nulla! Fuga, sed!
      </p>
      <!-- buttons -->
      <div class="flex items-center border-2">
        <FilledButton
          text="mai mult"
          color="bg-lightblue"
          to="/about"
        ></FilledButton>
        <span class="flex">
          <span class="ml-2 flex items-center"
            >
            <!-- phone icon -->
            <span class="flex bg-lightblue rounded-xl py-2 px-3"
              ><i
                class="bi bi-telephone-fill text-white text-md"
              ></i
            ></span>
            <p class="text-xl font-semibold text-lightblue">+40 745 572 157</p></span
          >
        </span>
      </div>
    </div>
    <!-- right side image -->
    <div>
      <img
        src="/src/assets/images/herophoto.png"
        alt="hero image"
        class="h-96"
      />
    </div>
  </div>
</template>
<style></style>
