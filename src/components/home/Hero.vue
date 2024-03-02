<script setup>
import FilledButton from "../general/FilledButton.vue";
</script>
<template>
  <div class="container mx-auto flex flex-col justify-around items-center lg:flex-row">
    <!-- left side content -->
    <div class=" w-full lg:w-1/2 flex flex-col order-last lg:order-first">
      <p class="text-sm uppercase font-body text-darkblue mb-2 text-center lg:text-start mt-20 lg:mt-0">
        grădinița elim hotar
      </p>
      <h1 class="text-7xl uppercase  text-yellow font-heading font-black mb-3 text-center lg:text-start">
        bine ai venit <br />
        gradi elim
      </h1>
      <p class="text-xl font-body text-darkblue mb-5 text-center lg:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        facilis magnam! Maiores, corrupti sunt dolor molestias vero, quo ullam
        facere explicabo, quaerat ut iure perspiciatis mollitia asperiores
        nulla! Fuga, sed!
      </p>

      <!-- buttons -->
      <div class="flex items-center justify-center lg:justify-normal mt-10 lg:mt-0">
        <FilledButton text="mai mult" color="bg-lightblue" to="/about" class="order-last lg:order-first"></FilledButton>
        <!-- phone number -->
        <div class="flex order-last lg:order-first">
          <div class="ml-2 flex items-center">
            <!-- phone icon -->
            <div class="flex bg-lightblue rounded-xl py-2 px-3">
              <i
                class="bi bi-telephone-fill text-white text-2xl"></i></div>
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
      <img src="/src/assets/images/herophoto.png" alt="hero image" style="height: 30rem;" />
    </div>
  </div>
</template>
<style></style>
