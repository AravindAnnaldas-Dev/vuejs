<script setup>
import { defineProps } from "vue";

defineProps({
  bgColor: {
    type: String,
    default: "bg-neutral-200",
  },
  hoverBgColor: {
    type: String,
    default: "bg-neutral-400",
  },
  marginTop: {
    type: String,
  },
});
</script>

<template>
  <div
    :class="[
      'block max-w-sm p-6 border shadow-xs rounded-xl transition-all duration-300 cursor-pointer',
      bgColor,
      hoverBgColor,
      marginTop,
    ]"
  >
    <h5
      class="mb-3 text-2xl font-semibold leading-8 tracking-tight text-heading"
    >
      Noteworthy technology acquisitions 2021
    </h5>
    <p class="text-body">
      Here are the biggest technology acquisitions of 2025 so far, in reverse
      chronological order.
    </p>
  </div>
</template>
