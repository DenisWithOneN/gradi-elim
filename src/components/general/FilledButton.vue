<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

//defined as String for TailwindCSS
const props = defineProps({
    text: String,
    color: String,
    to: String,
    size: String,
})
</script>

<template>
    <RouterLink :class="`bg-${props.color}`, props.size" class="drop-shadow-custom p-2 px-3 rounded-xl text-white font-semibold font-body uppercase" :to="to">{{ props.text }}</RouterLink>
</template>