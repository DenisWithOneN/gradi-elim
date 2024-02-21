<script setup>

import FilledButton from '../general/FilledButton.vue';
const hours = [
  {
    firstHour: "07:45",
    secondHour: "09:00",
    activity: "primirea copiilor",
  },
  {
    firstHour: "09:00",
    secondHour: "10:00",
    activity: "activitati pe domenii experientiale",
  },

  {
        firstHour: '10:00',
        secondHour: '10:45',
        activity: 'gustarea',
    },
    {
        firstHour: '10:45',
        secondHour: '11:30',
        activity: 'jocuri si activitati didactice alese',
    },
    {
        firstHour: '11:30',
        secondHour: '12:30',
        activity: 'activitati pe domenii experientiale',
    },
    {
        firstHour: '12:30',
        secondHour: '13:00',
        activity: 'jocuri recreative',
    },
];
</script>
<template>
  <div class="container mx-auto mb-2">
    <h2 class="text-4xl font-semibold text-center uppercase text-yellow">orar</h2>
    <div class="flex justify-around items-center">
      <!-- left content -->
      <div>
        <div v-for="(interval, index) in hours" :key="index" class="flex items-center">
          <i class="bi bi-alarm-fill text-green text-3xl"></i>
          <p class="mx-2">{{ interval.firstHour }} - {{ interval.secondHour }}</p>
          <p class="mx-2">{{ interval.activity }}</p>
        </div>
      </div>
      <!-- /left content -->
      <img src="/src/assets/images/clock.png" alt="clock" class="h-96" />
    </div>
    <div class="text-center">
        <FilledButton color="bg-yellow" text="orar complet" to="/schedule" class=""></FilledButton>
    </div>
  </div>
</template>
