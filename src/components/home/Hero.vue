<script setup>
import FilledButton from "../general/FilledButton.vue";
import EmptyButton from "../general/EmptyButton.vue"
</script>

<template>
  <div class="container space-x-10 mx-auto px-10 flex flex-col justify-center items-center lg:flex-row">
    <!-- left side content -->
    <div class="flex flex-col order-last lg:order-first">
      <div class="flex flex-col items-center lg:items-start">
        <p class="text-sm uppercase font-body text-darkblue mb-2 text-center lg:text-start mt-5 lg:mt-0">
          grădinița elim hotar
        </p>
        <h1
          class="text-mobileHeading uppercase text-yellow font-heading font-black text-center mb-3 sm:text-5xl md:text-6xl lg:text-start lg:text-7xl">
          bine ai venit <br />
          gradi elim
        </h1>
        <p class="text-darkblue text-sm max-w-lg font-body text-center mb-5 sm:text-lg md:text-xl lg:text-start lg:mx-0">
          Explorăm, învățăm și creștem împreună într-o oază plină de bucurie și iubire, chiar în inima comunității 
          noastre rurale. La Grădinița Elim, fiecare zi este o aventură plină de descoperiri, iar micuții noștri sunt
          ghidați cu grijă și afecțiune pe drumul cunoașterii.
        </p>
      </div>

      <!-- buttons -->
      <div class="flex flex-col items-center justify-center sm:flex-row lg:justify-normal">
        <FilledButton size="text-xl" text="mai mult" color="lightblue" to="/about" class="my-2 sm:my-0 sm:mr-2">
        </FilledButton>
        <EmptyButton :size="'text-xl'" :text="'contact'" :color="'lightblue'" :backgroundColor="'bg-white'"
          :to="'/contact'" class="my-2 sm:my-0 sm:ml-2"></EmptyButton>
      </div>
      <!-- /buttons -->
    </div>
    <!-- right side image -->
    <div>
      <img src="/src/assets/images/herophoto.png" alt="hero image" class="h-60 sm:h-96 lg:h-lgCustom xl:h-xlCustom" />
    </div>
  </div>
</template>

<style></style>
