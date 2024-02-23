<script setup>
import FilledButton from "../general/FilledButton.vue";
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
    firstHour: "10:00",
    secondHour: "10:45",
    activity: "gustarea",
  },
  {
    firstHour: "10:45",
    secondHour: "11:30",
    activity: "jocuri si activitati didactice alese",
  },
  {
    firstHour: "11:30",
    secondHour: "12:30",
    activity: "activitati pe domenii experientiale",
  },
  {
    firstHour: "12:30",
    secondHour: "13:00",
    activity: "jocuri recreative",
  },
];
</script>
<template>
  <div class="container mx-auto mb-2 flex items-center justify-center">
    <img src="/src/assets/images/schedule.png" alt="schedule" class="mx-10" />
    <svg width="5" height="400" xmlns="http://www.w3.org/2000/svg">
      <!-- Include your SVG content directly here -->
      <use href="/src/assets/svg/background_design/scheduleLine.svg#1" />
    </svg>
    <div class="mx-10">
      <h2 class="text-5xl font-black uppercase font-heading text-yellow">
        orar
      </h2>
      <!-- hours -->

      <!-- right content -->
      <div>
        <div
          v-for="(interval, index) in hours"
          :key="index"
          class="flex items-start my-4"
        >
          <i class="bi bi-alarm-fill text-green text-5xl"></i>
          <div class="flex flex-col ml-5">
            <p class="font-body text-2xl font-bold text-darkblue">
              {{ interval.firstHour }} - {{ interval.secondHour }}
            </p>
            <p class="font-body text-xl">{{ interval.activity }}</p>
          </div>
        </div>
      </div>
      <!-- /right content -->
    </div>
    <!-- /hours -->
  </div>

  <!-- <FilledButton
          color="bg-yellow"
          text="orar complet"
          to="/schedule"
        ></FilledButton> -->
</template>
