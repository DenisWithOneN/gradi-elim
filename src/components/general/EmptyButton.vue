<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps(['text', 'color', 'to', 'size']);


</script>
<template>
    <RouterLink :class="'border-'+props.color, 'text-'+props.color, props.size" class="p-2 px-3 rounded-xl border-4 font-semibold font-body uppercase" :to="to">{{ props.text }}</RouterLink>
</template>