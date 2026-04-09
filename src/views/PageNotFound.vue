<script setup>
import { RouterLink } from "vue-router";

defineProps({
  requestedPath: {
    type: String,
    default: "",
  },
  primaryLabel: {
    type: String,
    default: "Back to Home",
  },
  primaryTo: {
    type: [String, Object],
    default: "/",
  },
  secondaryLabel: {
    type: String,
    default: "Browse Collection",
  },
  secondaryTo: {
    type: [String, Object],
    default: "/collection",
  },
});

const recoveryTips = [
  {
    label: "Check the URL",
    description:
      "A small typo or an old bookmarked link is usually all it takes to miss the right page.",
  },
  {
    label: "Use the menu",
    description:
      "Jump back into the storefront from the top navigation and continue browsing from there.",
  },
];
</script>

<template>
  <section class="flex items-start justify-center px-4 pt-8 pb-16">
    <div
      class="relative overflow-hidden rounded-[2.5rem] max-w-2xl bg-stone-900 p-8 text-white shadow-2xl shadow-stone-300/70 sm:p-10"
    >
      <div
        class="absolute -right-12 top-0 h-44 w-44 rounded-full bg-[#c56232]/30 blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 rounded-full h-36 w-36 bg-white/10 blur-3xl"
      ></div>

      <div class="relative">
        <p
          class="text-sm font-semibold uppercase tracking-[0.45em] text-[#f2b18d]"
        >
          Error 404
        </p>
        <h1
          class="max-w-xl mt-4 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          Page not found.
        </h1>
        <p class="max-w-2xl mt-5 text-lg leading-8 text-stone-300">
          The page you were trying to reach is not available right now, but the
          rest of the storefront is still ready to explore.
        </p>

        <div
          v-if="requestedPath"
          class="inline-flex items-center max-w-full gap-3 px-4 py-2 mt-6 text-sm border rounded-full border-white/10 bg-white/10 text-stone-200"
        >
          <span class="uppercase tracking-[0.25em] text-stone-400"
            >Requested</span
          >
          <span class="font-medium text-white truncate">{{
            requestedPath
          }}</span>
        </div>

        <div class="flex flex-wrap gap-4 mt-8">
          <RouterLink
            :to="primaryTo"
            class="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-stone-900 transition hover:bg-[#f2b18d]"
          >
            {{ primaryLabel }}
          </RouterLink>
          <RouterLink
            :to="secondaryTo"
            class="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            {{ secondaryLabel }}
          </RouterLink>
        </div>

        <div class="grid gap-4 mt-10 sm:grid-cols-2">
          <article
            v-for="tip in recoveryTips"
            :key="tip.label"
            class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.3em] text-stone-300"
            >
              {{ tip.label }}
            </p>
            <p class="mt-3 text-sm leading-7 text-stone-300">
              {{ tip.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
