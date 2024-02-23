<script setup>
import FilledButton from "../general/FilledButton.vue";
</script>
<template>
  <div class="container mx-auto flex justify-around items-center">
    <!-- left side content -->
    <div class="w-1/2 flex flex-col">
      <p class="text-sm uppercase font-body text-darkblue mb-2">
        grădinița elim hotar
      </p>
      <h1 class="text-7xl uppercase text-yellow font-heading font-black mb-3">
        bine ai venit <br />
        gradi elim
      </h1>
      <p class="text-xl font-body text-darkblue mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        facilis magnam! Maiores, corrupti sunt dolor molestias vero, quo ullam
        facere explicabo, quaerat ut iure perspiciatis mollitia asperiores
        nulla! Fuga, sed!
      </p>

      <!-- buttons -->
      <div class="flex items-center">
        <FilledButton
          text="mai mult"
          color="bg-lightblue"
          to="/about"
        ></FilledButton>
        <!-- phone number -->
        <span class="flex">
          <span class="ml-2 flex items-center">
            <!-- phone icon -->
            <span class="flex bg-lightblue rounded-xl py-2 px-3"
              ><i class="bi bi-telephone-fill text-white text-2xl"></i
            ></span>
            <p class="text-2xl font-semibold font-body text-lightblue ml-2">
              +40 745 572 157
            </p></span
          >
        </span>
        <!-- /phone number -->
      </div>
      <!-- /buttons -->
    </div>
    <!-- right side image -->
    <div>
      <img src="/src/assets/images/herophoto.png" alt="hero image" style="height: 30rem;" />
    </div>
  </div>
</template>
<style></style>
