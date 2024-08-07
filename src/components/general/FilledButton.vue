<script setup>
import { RouterLink } from "vue-router";

//defined as String for TailwindCSS
const props = defineProps({
  text: String,
  bgColor: String,
  to: String,
  size: String,
});
</script>

<template>
  <RouterLink
    :class="[
      props.bgColor,
      props.size,
      'drop-shadow-custom',
      'p-2',
      'px-3',
      'rounded-xl',
      'text-white',
      'font-semibold',
      'font-body',
      'uppercase',
    ]"
    :to="props.to"
    >{{ props.text }}</RouterLink
  >
</template>
