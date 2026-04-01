<script setup>
import { RouterView } from "vue-router";
import Heading from "./components/Heading.vue";
</script>

<template>
  <Heading :title="'Browse Jobs'" />

  <RouterView />
</template>
