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
  </div>
</template>
