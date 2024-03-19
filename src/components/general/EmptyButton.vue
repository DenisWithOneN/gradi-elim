<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    text: String,
    color: String,
    backgroundColor: String,
    to: String,
    size: String,
});




</script>
<template>
    <RouterLink :class="`border-${props.color}`, `text-${props.color}`, props.backgroundColor, props.size" class="drop-shadow-custom p-2 px-3 rounded-xl border-2 font-semibold font-body uppercase" :to="to">{{ props.text }}</RouterLink>
</template>