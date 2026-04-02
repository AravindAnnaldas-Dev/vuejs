<script setup>
import { RouterView } from "vue-router";
import Heading from "./components/Heading.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="pt-24 overflow-auto size-full">
    <Navbar />
    <Heading :title="'Browse Jobs'" />

    <RouterView />
  </div>
</template>
