<script setup>
import CardWrapper from "@/components/CardWrapper.vue";
import JobCards from "@/components/JobCards.vue";
</script>

<template>
  <div class="flex items-center justify-center w-full gap-4">
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
  </div>

  <div class="flex items-center justify-center w-full mt-8">
    <a
      href="/jobs"
      class="px-8 py-3 text-xl font-medium text-white transition bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800"
    >
      View all Jobs
    </a>
  </div>
</template>
