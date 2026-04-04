<script setup>
import { RouterLink } from "vue-router";

defineProps({
  eyebrow: {
    type: String,
    default: "Featured",
  },
  title: {
    type: String,
    default: "Clean design for everyday comfort",
  },
  description: {
    type: String,
    default:
      "A reusable content card for shoe collections and category highlights.",
  },
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  linkText: {
    type: String,
    default: "Explore Collection",
  },
  to: {
    type: String,
    default: "/collection",
  },
  surfaceClass: {
    type: String,
    default: "bg-white",
  },
});
</script>

<template>
  <article
    :class="[
      'overflow-hidden rounded-4xl border border-white/60 p-6 shadow-lg shadow-stone-200/50',
      surfaceClass,
    ]"
  >
    <div class="flex flex-col h-full gap-6 lg:flex-row lg:items-center">
      <div class="max-w-xs">
        <p
          class="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500"
        >
          {{ eyebrow }}
        </p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
          {{ title }}
        </h2>
        <p class="mt-3 text-sm leading-7 text-stone-700">
          {{ description }}
        </p>

        <RouterLink
          :to="to"
          class="mt-6 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c56232]"
        >
          {{ linkText }}
        </RouterLink>
      </div>

      <div
        class="relative flex-1 overflow-hidden rounded-[1.75rem] bg-white/60 p-3"
      >
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_55%)]"
        ></div>
        <img
          :src="image"
          :alt="title"
          class="relative object-cover w-full h-64 rounded-3xl lg:max-h-72"
        />
      </div>
    </div>
  </article>
</template>
