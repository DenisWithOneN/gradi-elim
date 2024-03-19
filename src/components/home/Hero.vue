<script setup>
import FilledButton from "../general/FilledButton.vue";
import EmptyButton from "../general/EmptyButton.vue"
</script>

<template>
  <div class="container mx-auto px-10 flex flex-col justify-center items-center lg:flex-row">
    <!-- left side content -->
    <div class="w-full lg:w-1/2 flex flex-col order-last lg:order-first">
      <div class="flex flex-col items-center lg:items-start">
        <p class="text-sm uppercase font-body text-darkblue mb-2 text-center lg:text-start mt-5 lg:mt-0">
          grădinița elim hotar
        </p>
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase  text-yellow font-heading font-black mb-3 text-center lg:text-start">
          bine ai venit <br />
          gradi elim
        </h1>
        <p class="text-sm md:text-xl mx-10 lg:mx-0 font-body text-darkblue mb-5 text-center lg:text-start">
          Explorăm, învățăm și creștem împreună într-o oază plină de bucurie și iubire, chiar în inima comunității
          noastre rurale. La Grădinița Elim, fiecare zi este o aventură plină de descoperiri, iar micuții noștri sunt
          ghidați cu grijă și afecțiune pe drumul cunoașterii.
        </p>
      </div>

      <!-- buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-normal">
        <FilledButton size="text-2xl" text="mai mult" color="lightblue" to="/about" class="order-last lg:order-first">
        </FilledButton>
        <!-- phone number -->
        <div class="flex order-last lg:order-first">  
          <div class="ml-2 flex items-center">
            <EmptyButton :size="'text-2xl'" :text="'contact'" :color="'lightblue'" :backgroundColor="'bg-white'" :to="'/contact'"
              class="order-last lg:order-first"></EmptyButton>
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
