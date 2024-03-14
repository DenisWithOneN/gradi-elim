<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps(['text', 'color', 'to', 'size']);

</script>
<template>
    <RouterLink :class="props.color, props.size" class="p-2 px-3 rounded-xl text-white font-semibold font-body uppercase" :to="to">{{ props.text }}</RouterLink>
</template>