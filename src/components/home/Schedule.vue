<script setup>
import FilledButton from "../general/FilledButton.vue";
const hours = [
  {
    firstHour: "07:45",
    secondHour: "09:00",
    activity: "primirea copiilor",
    color: "green",
    image: "src/assets/images/Layer 1.png"
  },
  {
    firstHour: "09:00",
    secondHour: "10:00",
    activity: "activitati pe domenii experientiale",
    color: "blue",
    image: "src/assets/images/Layer 2.png"
  },

  {
    firstHour: "10:00",
    secondHour: "10:45",
    activity: "gustarea",
    color: "yellow",
    image: "src/assets/images/Layer 3.png"
  },
  {
    firstHour: "10:45",
    secondHour: "11:30",
    activity: "jocuri si activitati didactice alese",
    color: "green",
    image: "src/assets/images/Layer 4.png"
  },
  {
    firstHour: "11:30",
    secondHour: "12:30",
    activity: "activitati pe domenii experientiale",
    color: "blue",
    image: "src/assets/images/Layer 5.png"
  },
  {
    firstHour: "12:30",
    secondHour: "13:00",
    activity: "jocuri recreative",
    color: "yellow",
    image: "src/assets/images/Layer 6.png"
  },
];
</script>
<template>

  <div v-for="(hour, index) in hours" :key="index">
    <div>
      <img :src="hour.image" alt="gallery photo" class="h-14">
    </div>
  </div>
  
</template>
