<!-- Component Props -->

<script setup>
import Heading from "@/components/Heading.vue";
import CardWrapper from "./components/CardWrapper.vue";
</script>

<template>
  <Heading title="Vue JS demo component to use now." />

  <CardWrapper
    bg-color="bg-red-200"
    hover-bg-color="hover:bg-red-300"
    margin-top="mt-8"
  />

  <CardWrapper
    bg-color="bg-green-200"
    hover-bg-color="hover:bg-green-300"
    margin-top="mt-8"
  />
</template>
