<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps(['text', 'color', 'to']);

</script>
<template>
    <RouterLink :class="props.color" class="p-2 px-3 rounded-xl text-white font-semibold" :to="to">{{ props.text }}</RouterLink>
</template>