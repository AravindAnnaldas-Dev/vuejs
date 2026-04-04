<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen text-stone-900">
    <Navbar />
    <RouterView />
  </div>
</template>
