<script setup>
import { defineProps } from "vue";
import { formatSalary, getRelativeTime } from "@/utils/jobFormatter";

defineProps({
  job: {
    type: Object,
  },
});
</script>

<template>
  <div class="max-w-xl p-4 mx-auto md:max-w-2xl lg:max-w-3xl">
    <div
      class="p-6 transition duration-300 bg-white border shadow-xl border-stone-200 rounded-2xl hover:shadow-xl"
    >
      <!-- Header -->
      <div
        class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
      >
        <div>
          <h2 class="text-xl font-semibold text-gray-900">
            {{ job.title }}
          </h2>
          <p class="mt-1 text-sm text-gray-500">
            {{ job.company?.name || "Unknown Company" }} •
            {{ job.company.location }}
          </p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs text-purple-600">{{
            job.remote === "hybrid"
              ? "Hybrid"
              : job.remote
                ? "Remote"
                : "On-site"
          }}</span>
          <span
            :class="[
              'px-3 py-1 text-xs font-medium rounded-full',
              job.isActive
                ? `text-green-700 bg-green-100`
                : `text-red-700 bg-red-100`,
            ]"
          >
            {{ job.isActive ? "Active" : "Inactive" }}
          </span>
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          class="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-md"
          v-for="(skill, index) in job.skills"
          :key="index"
        >
          {{ skill }}
        </span>
      </div>

      <!-- Description -->
      <p class="mt-4 text-sm leading-relaxed text-gray-600">
        {{ job.description }}
      </p>

      <!-- Website URL -->
      <p v-if="job.company.website" class="mt-2 text-sm text-gray-600">
        <span class="font-medium text-gray-700">For more details:</span>

        <a
          :href="job.company.website"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-1 font-medium text-blue-600 break-all hover:underline hover:text-blue-700"
        >
          {{ job.company.website }}
        </a>
      </p>

      <!-- Info Row -->
      <div class="flex items-center justify-between mt-6">
        <div>
          <p class="text-sm text-gray-500">Salary</p>
          <p class="font-semibold text-gray-800">
            {{ formatSalary(job.salary) }}
          </p>
        </div>

        <div>
          <p class="text-sm text-gray-500">Experience</p>
          <p class="font-semibold text-gray-800 capitalize">
            {{ job.experienceLevel }} level
          </p>
        </div>

        <div>
          <p class="text-sm text-gray-500">Type</p>
          <p class="font-semibold text-gray-800 capitalize">
            {{ job.employmentType }}
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-4 mt-6 border-t">
        <div class="text-xs text-gray-500">
          {{ job.applicantsCount }} applicants • Posted
          {{ getRelativeTime(job.postedAt) }}
        </div>

        <button
          class="px-4 py-2 text-sm font-medium text-white transition bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800"
        >
          Apply Now
        </button>
      </div>
    </div>
  </div>
</template>
