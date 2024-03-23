<script setup>
import FilledButton from "../general/FilledButton.vue";
const hours = [
  {
    firstHour: "07:45",
    secondHour: "09:00",
    activity: "primirea copiilor",
    dropshadowColor: "drop-shadow-scheduleCardGreen",
    image: "src/assets/images/Layer 1.png",
    color: "text-green"
  },
  {
    firstHour: "09:00",
    secondHour: "10:00",
    activity: "activitati pe domenii experientiale",
    dropshadowColor: "drop-shadow-scheduleCardBlue",
    image: "src/assets/images/Layer 2.png",
    color: "text-lightblue"
  },

  {
    firstHour: "10:00",
    secondHour: "10:45",
    activity: "gustarea",
    dropshadowColor: "drop-shadow-scheduleCardYellow",
    image: "src/assets/images/Layer 3.png",
    color: "text-yellow"
  },
  {
    firstHour: "10:45",
    secondHour: "11:30",
    activity: "jocuri si activitati didactice alese",
    dropshadowColor: "drop-shadow-scheduleCardGreen",
    image: "src/assets/images/Layer 4.png",
    color: "text-green"
  },
  {
    firstHour: "11:30",
    secondHour: "12:30",
    activity: "activitati pe domenii experientiale",
    dropshadowColor: "drop-shadow-scheduleCardBlue",
    image: "src/assets/images/Layer 5.png",
    color: "text-lightblue"
  },
  {
    firstHour: "12:30",
    secondHour: "13:00",
    activity: "jocuri recreative",
    dropshadowColor: "drop-shadow-scheduleCardYellow",
    image: "src/assets/images/Layer 6.png",
    color: "text-yellow"
  },
];
</script>
<template>
  <section class="flex flex-col items-center justify-center gap-y-10">
  <h2 class="text-yellow text-5xl md:text-6xl lg:text-7xl font-heading uppercase font-black">orar</h2>
  <div class="grid grid-cols-3 place-items-center  gap-10  mx-auto">
    <div v-for="(hour, index) in hours" :key="index" class=" bg-white flex flex-col items-center pt-5 p-2 w-52 h-52 rounded-2xl" :class="hour.dropshadowColor">
      <img :src="hour.image" alt="gallery photo" class="h-14">
      <p class="text-xl md:text-2xl lg:text-3xl font-bold font-heading" :class="`${hour.color}`">{{ hour.firstHour }} - {{ hour.secondHour }}</p>
      <p class="text-darkblue font-body text-sm sm:text-lg md:text-xl xl:text-2xl text-center">{{ hour.activity }}</p>
    </div>
  </div>
  <FilledButton :bgColor='`bg-yellow`' :text="`orar complet`" :size="`text-xl`" :to="`/schedule`"></FilledButton>
</section>

</template>
