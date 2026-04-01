<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "This is title heading Vue component",
  },
});
</script>

<template>
  <h1 class="w-full py-4 font-medium text-center text-3xl/normal">
    {{ title }}
  </h1>
</template>
