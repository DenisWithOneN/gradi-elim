<script setup>
import FilledButton from "../general/FilledButton.vue";
const hours = [
  {
    firstHour: "07:45",
    secondHour: "09:00",
    activity: "primirea copiilor",
    color: "green"
  },
  {
    firstHour: "09:00",
    secondHour: "10:00",
    activity: "activitati pe domenii experientiale",
    color: "blue"
  },

  {
    firstHour: "10:00",
    secondHour: "10:45",
    activity: "gustarea",
    color: "yellow"
  },
  {
    firstHour: "10:45",
    secondHour: "11:30",
    activity: "jocuri si activitati didactice alese",
    color: "green"
  },
  {
    firstHour: "11:30",
    secondHour: "12:30",
    activity: "activitati pe domenii experientiale",
    color: "blue"
  },
  {
    firstHour: "12:30",
    secondHour: "13:00",
    activity: "jocuri recreative",
    color: "yellow"
  },
];
</script>
<template>

  <div v-for="(hour, index) in hours" :key="index">
  
  </div>
  
</template>
