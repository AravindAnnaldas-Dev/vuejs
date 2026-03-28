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
  <h1>{{ title }}</h1>
</template>
