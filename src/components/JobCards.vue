<script setup>
import { ref, defineProps, computed } from "vue";
import JobCard from "@/components/JobCard.vue";
import jobsList from "@/jobs.json";

defineProps({
  limit: Number,
});

const jobs = ref(jobsList);
</script>

<template>
  <h1 class="w-full py-4 font-medium text-center text-3xl/normal">
    Browse Jobs
  </h1>

  <div class="w-full p-4">
    <div
      class="grid w-full grid-cols-1 gap-4 mx-auto mt-2 max-w-300 md:grid-cols-2 lg:grid-cols-3"
    >
      <JobCard
        v-for="job in jobs.slice(0, limit)"
        :key="job.id"
        :job="job"
        :descriptionLength="90"
      />
    </div>

    <div class="flex items-center justify-center w-full mt-8">
      <button
        class="px-8 py-3 text-xl font-medium text-white transition bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800"
      >
        View all Jobs
      </button>
    </div>
  </div>
</template>
