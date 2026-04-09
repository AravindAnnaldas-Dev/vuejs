<script setup>
import ShoeCards from "@/components/ShoeCards.vue";
import axios from "axios";
import { onMounted, reactive } from "vue";

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
</script>

<template>
  <main class="px-4 pt-8 pb-16">
    <section class="mx-auto max-w-7xl">
      <div class="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#c56232]"
          >
            Collection
          </p>
          <h1
            class="max-w-4xl mt-3 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl"
          >
            Shoes built for the street, studio, and weekend.
          </h1>
          <p class="max-w-3xl mt-4 text-lg leading-8 text-stone-600">
            The listing page now showcases product details instead of job meta,
            with a layout tuned for browsing pairs quickly and comfortably.
          </p>
        </div>

        <div
          class="rounded-[1.75rem] border border-white/80 bg-white/75 p-5 shadow-lg shadow-stone-200/40 backdrop-blur"
        >
          <p
            class="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500"
          >
            Store Promise
          </p>
          <p class="max-w-sm mt-3 text-sm leading-7 text-stone-600">
            Free shipping above Rs. 6,000, easy size exchanges, and curated
            pairs that balance comfort with everyday wearability.
          </p>
        </div>
      </div>

      <div v-if="state.shoes.length > 0" class="mt-10">
        <ShoeCards :shoes="state.shoes" />
      </div>
    </section>
  </main>
</template>
