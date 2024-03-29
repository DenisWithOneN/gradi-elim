<script setup>
import FilledButton from "/src/components/general/FilledButton.vue";
</script>
<template>
  <div
    class="flex flex-col lg:flex-row justify-center items-center gap-5 mx-10"
  >
    <div
      class="photo1 rounded-2xl w-52 h-52 md:w-60 md:h-60 lg:w-96 lg:h-96 lg:order-last"
    ></div>
    <div class="flex flex-col items-center lg:items-start gap-3">
      <h1
        class="text-center font-heading font-black uppercase text-green text-3xl md:text-5xl lg:text-6xl lg:text-start"
      >
        despre noi
      </h1>
      <div class="hidden md:block w-32 h-1 bg-green"></div>
      <p
        class="text-darkblue text-center font-body text-sm sm:text-lg md:text-xl xl:text-2xl lg:max-w-2xl lg:text-start"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, incidunt
        molestias? Repellat corporis eos optio non illo distinctio minus,
        aliquam odit praesentium, provident aliquid ad cum molestias quae. Quis,
        dolores?
      </p>
      <FilledButton
        :text="`contact`"
        :bgColor="`bg-green`"
        :to="`/contact`"
        :size="`text-xl xl:text-2xl`"
      ></FilledButton>
    </div>
  </div>
</template>
<style scoped>
.photo1 {
  background-image: url("src/assets/gallery-images/ZVE05452.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
