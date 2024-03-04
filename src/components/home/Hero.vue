<script setup>
import FilledButton from "../general/FilledButton.vue";
</script>

<template>
  <div class="container mx-auto flex flex-col justify-around items-center lg:flex-row">
    <!-- left side content -->
    <div class="w-full lg:w-1/2 flex flex-col order-last lg:order-first">
      <div class="flex flex-col items-center lg:items-start">
        <p class="text-sm uppercase font-body text-darkblue mb-2 text-center lg:text-start mt-5 lg:mt-0">
          grădinița elim hotar
        </p>
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase  text-yellow font-heading font-black mb-3 text-center lg:text-start">
          bine ai venit <br />
          gradi elim
        </h1>
        <p class="text-sm md:text-xl mx-10 lg:mx-0 font-body text-darkblue mb-5 text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          facilis magnam! Maiores, corrupti sunt dolor molestias vero, quo ullam
          facere explicabo, quaerat ut iure perspiciatis mollitia asperiores
          nulla! Fuga, sed!
        </p>
      </div>

      <!-- buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-normal">
        <FilledButton text="mai mult" color="bg-lightblue" to="/about" class="order-last lg:order-first"></FilledButton>
        <!-- phone number -->
        <div class="flex order-last lg:order-first">
          <div class="ml-2 flex items-center">
            <!-- phone icon -->
            <div class="flex bg-lightblue rounded-xl py-2 px-3">
              <i class="bi bi-telephone-fill text-white text-2xl"></i>
            </div>
            <p class="text-2xl font-semibold font-body text-lightblue ml-2">
              +40 745 572 157
            </p>
          </div>
        </div>
        <!-- /phone number -->
      </div>
      <!-- /buttons -->
    </div>
    <!-- right side image -->
    <div>
      <img src="/src/assets/images/herophoto.png" alt="hero image" class="h-72 md:h-96 xl:h-normal" />
    </div>
  </div>
</template>

<style></style>
