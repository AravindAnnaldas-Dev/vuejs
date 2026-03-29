<script setup>
import { ref } from "vue";
import JobCard from "./components/JobCard.vue";
import jobsList from "@/jobs.json";

const jobs = ref(jobsList);
</script>

<template>
  <JobCard v-for="job in jobs" :key="job.id" :job="job" />
</template>
