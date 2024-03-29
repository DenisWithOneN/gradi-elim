<script setup>
import FilledButton from "../general/FilledButton.vue";
import EmptyButton from "../general/EmptyButton.vue"
</script>

<template>
  <div class="container lg:space-x-10 mx-auto px-10 flex flex-col justify-center items-center lg:flex-row my-10">
    <!-- left side content -->
    <div class="flex flex-col order-last lg:order-first">
      <div class="flex flex-col items-center lg:items-start">
        <p class="text-darkblue text-sm font-body text-center uppercase mt-5 mb-2 lg:mt-0 lg:text-start xl:text-lg">
          grădinița elim hotar
        </p>
        <h1
          class="text-mobileHeading uppercase text-yellow font-heading font-black text-center mb-3 sm:text-5xl md:text-6xl lg:text-start lg:text-7xl xl:text-8xl">
          bine ai venit <br>
          gradi elim
        </h1>
        <p
          class="text-darkblue text-sm max-w-lg font-body text-center mb-5 sm:text-lg md:text-xl lg:text-start lg:mx-0 xl:text-2xl xl:max-w-xl">
          Explorăm, învățăm și creștem împreună într-o oază plină de bucurie și iubire, chiar în inima comunității
          noastre rurale. La Grădinița Elim, fiecare zi este o aventură plină de descoperiri, iar micuții noștri sunt
          ghidați cu grijă și afecțiune pe drumul cunoașterii.
        </p>
      </div>
      <!-- buttons -->
      <div class="flex flex-col items-center justify-center sm:flex-row lg:justify-normal">
        <FilledButton :size="`text-xl xl:text-2xl`" :bgColor="`bg-lightblue`" :text="`mai mult`" :to="`/about`"
          class="my-2 sm:my-0 sm:mr-2">
        </FilledButton>
        <EmptyButton :size="`text-xl xl:text-2xl`" :text="'contact'" :borderColor="`border-lightblue`"
          :textColor="`text-lightblue`" :bgColor="'bg-white'" :to="'/contact'" class="my-2 sm:my-0 sm:ml-2">
        </EmptyButton>
      </div>
      <!-- /buttons -->
    </div>
    <!-- right side image -->
    <img src="/src/assets/images/herophoto.png" alt="hero image" class="h-52 sm:h-96 lg:h-lgCustom xl:h-xlCustom" />

  </div>

</template>

<style></style>
