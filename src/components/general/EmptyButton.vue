<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps(['text', 'color', 'to', 'size']);
const borderColor = 'border-' + props.color
const textColor = 'text-' + props.color

</script>
<template>
    <RouterLink :class="borderColor, textColor, props.size" class="p-2 px-3 rounded-xl border-2 font-semibold font-body uppercase" :to="to">{{ props.text }}</RouterLink>
</template>