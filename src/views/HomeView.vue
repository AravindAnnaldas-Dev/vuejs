<script setup>
import { RouterLink } from "vue-router";
import FeatureCard from "@/components/FeatureCard.vue";
import ShoeCards from "@/components/ShoeCards.vue";
import { formatPrice } from "@/utils/productFormatter";
import { computed, onMounted, reactive } from "vue";
import axios from "axios";

const highlights = [
  {
    value: "48hr",
    label: "dispatch on featured pairs",
  },
  {
    value: "4.8/5",
    label: "average customer rating",
  },
  {
    value: "6 drops",
    label: "available in this launch",
  },
];

const state = reactive({
  shoes: [],
  isLoading: true,
});

onMounted(async () => {
  state.isLoading = true;
  try {
    const response = await axios.get("/api/shoes");
    state.shoes = response.data;
  } catch (error) {
    console.error("Error fetching shoe collections", error);
  } finally {
    state.isLoading = false;
  }
});

const heroShoe = computed(() => {
  return state.shoes[0];
});

const featuredStories = computed(() => {
  return [
    {
      eyebrow: "Urban Rotation",
      title: "Everyday sneakers with a premium edge",
      description:
        "Clean leather, soft suede touches, and neutral tones that work from coffee runs to evening plans.",
      image: state.shoes[1].image,
      surfaceClass: "bg-[#eaded0]/90",
    },
    {
      eyebrow: "Track Focus",
      title: "Lightweight runners built to move fast",
      description:
        "Responsive foam, breathable uppers, and secure heel support for daily training without the bulk.",
      image: state.shoes[4].image,
      surfaceClass: "bg-[#f3e7dc]/90",
    },
  ];
});
</script>

<template>
  <main class="px-4 pt-8 pb-16 scroll-smooth">
    <section
      class="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.45em] text-[#c56232]"
        >
          Spring 2026 Drop
        </p>
        <h1
          class="max-w-xl mt-4 text-5xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-6xl"
        >
          Step Into Better Shoes Every Day.
        </h1>
        <p class="max-w-xl mt-5 text-lg leading-8 text-stone-600">
          The old jobs board has been turned into a shoe storefront with cleaner
          product storytelling, stronger visuals, and a dedicated collections
          flow.
        </p>

        <div class="flex flex-wrap gap-4 mt-8">
          <RouterLink
            to="/collections"
            class="rounded-full bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c56232]"
          >
            Shop Collection
          </RouterLink>
          <a
            href="#featured"
            class="rounded-full border border-stone-300 px-6 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
          >
            See Featured Picks
          </a>
        </div>

        <div class="flex flex-wrap gap-4 mt-8">
          <div
            v-for="highlight in highlights"
            :key="highlight.label"
            class="px-5 py-4 border shadow-lg min-w-40 rounded-3xl border-white/80 bg-white/75 shadow-stone-200/50 backdrop-blur"
          >
            <p class="text-2xl font-semibold tracking-tight text-stone-900">
              {{ highlight.value }}
            </p>
            <p class="mt-1 text-sm text-stone-600">{{ highlight.label }}</p>
          </div>
        </div>
      </div>

      <div
        v-if="state.shoes.length > 0"
        class="relative overflow-hidden rounded-[2.5rem] bg-stone-900 p-6 text-white shadow-2xl shadow-stone-300/70"
      >
        <div
          class="absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#c56232]/30 blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 rounded-full h-36 w-36 bg-white/10 blur-3xl"
        ></div>

        <div class="relative flex flex-col h-full gap-6">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.35em] text-stone-300">
                Editor's Pick
              </p>
              <p class="mt-2 text-3xl font-semibold tracking-tight">
                {{ heroShoe.name }}
              </p>
            </div>

            <span
              class="px-4 py-2 text-sm font-medium rounded-full bg-white/10"
            >
              {{ heroShoe.badge }}
            </span>
          </div>

          <div class="p-3 overflow-hidden rounded-4xl bg-white/10">
            <img
              :src="heroShoe.image"
              :alt="heroShoe.name"
              class="object-cover w-full h-80 rounded-3xl"
            />
          </div>

          <div class="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-stone-300">
                {{ heroShoe.brand }} / {{ heroShoe.category }}
              </p>
              <p class="mt-2 text-sm leading-7 text-stone-300">
                {{ heroShoe.description }}
              </p>
            </div>

            <div class="px-5 py-4 bg-white rounded-3xl text-stone-900">
              <p class="text-xs uppercase tracking-[0.25em] text-stone-500">
                Starting at
              </p>
              <p class="mt-2 text-2xl font-semibold">
                {{ formatPrice(heroShoe.price) }}
              </p>
              <p class="mt-2 text-sm text-stone-500">
                Colors: {{ heroShoe.colors.join(" / ") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-6 mx-auto mt-12 max-w-7xl lg:grid-cols-2">
      <FeatureCard
        v-if="state.shoes.length > 0"
        v-for="story in featuredStories"
        :key="story.title"
        :eyebrow="story.eyebrow"
        :title="story.title"
        :description="story.description"
        :image="story.image"
        :surface-class="story.surfaceClass"
        link-text="Explore Collection"
        to="/collections"
      />
    </section>

    <section id="featured" class="mx-auto mt-14 max-w-7xl">
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#c56232]"
          >
            Featured Picks
          </p>
          <h2 class="mt-3 text-4xl font-semibold tracking-tight text-stone-900">
            The cards now focus on shoes, not job listings.
          </h2>
          <p class="max-w-2xl mt-3 text-base leading-7 text-stone-600">
            Each product card highlights price, fit, material, rating, and
            release freshness while keeping the layout simple and easy to scan.
          </p>
        </div>

        <RouterLink
          to="/collections"
          class="px-5 py-3 text-sm font-semibold transition border rounded-full border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900"
        >
          View Full Collection
        </RouterLink>
      </div>

      <div v-if="state.shoes.length > 0" class="mt-8">
        <ShoeCards :shoes="state.shoes" :limit="4" />
      </div>
    </section>
  </main>
</template>
