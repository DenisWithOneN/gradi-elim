<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    text: String,
    bgColor: String,
    textColor: String,
    borderColor: String,
    size: String,
    to: String,
});




</script>
<template>
    <RouterLink :class="props.bgColor, props.textColor, props.borderColor, props.size" class="drop-shadow-custom p-2 px-3 rounded-xl border-2 font-semibold font-body uppercase" :to="to">{{ props.text }}</RouterLink>
</template>