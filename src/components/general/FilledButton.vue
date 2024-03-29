<script setup>
import { RouterLink } from "vue-router";

//defined as String for TailwindCSS
const props = defineProps({
  text: String,
  bgColor: String,
  to: String,
  size: String,
});

console.log("culoare " + props.bgColor);
</script>

<template>
  <RouterLink
    :class="(props.bgColor, props.size)"
    class="drop-shadow-custom p-2 px-3 rounded-xl bg-blue-500 text-white font-semibold font-body uppercase"
    :to="to"
    >{{ props.text }}</RouterLink
  >
</template>
