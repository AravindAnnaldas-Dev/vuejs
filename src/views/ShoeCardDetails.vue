<script setup>
import { computed, onMounted, reactive } from "vue";
import { formatPrice, getRelativeTime } from "@/utils/productFormatter";
import { RouterLink, useRoute } from "vue-router";
import axios from "axios";

const props = defineProps({
  ctaLabel: {
    type: String,
    default: "Add to Bag",
  },
  secondaryCtaLabel: {
    type: String,
    default: "Save for Later",
  },
});

const route = useRoute();
const shoeId = route.params.id;

const state = reactive({
  shoe: {},
  isLoading: true,
});

onMounted(async () => {
  state.isLoading = true;
  try {
    const response = await axios.get(`/api/shoes/${shoeId}`);
    state.shoe = response.data;
  } catch (error) {
    console.error("Error fetching shoe collection", error);
  } finally {
    state.isLoading = false;
  }
});

const product = computed(() => state.shoe ?? {});

const hasDiscount = computed(
  () =>
    typeof product.value.originalPrice === "number" &&
    product.value.originalPrice > product.value.price,
);

const savingsAmount = computed(() =>
  hasDiscount.value ? product.value.originalPrice - product.value.price : 0,
);

const savingsPercent = computed(() => {
  if (!hasDiscount.value || !product.value.originalPrice) {
    return 0;
  }

  return Math.round((savingsAmount.value / product.value.originalPrice) * 100);
});

const availableSizes = computed(() => {
  const range = product.value.sizeRange ?? "";
  const match = range.match(/UK\s*(\d+)\s*-\s*(\d+)/i);

  if (!match) {
    return ["UK 6", "UK 7", "UK 8", "UK 9"];
  }

  const start = Number(match[1]);
  const end = Number(match[2]);

  return Array.from(
    { length: end - start + 1 },
    (_, index) => `UK ${start + index}`,
  );
});

const releasedLabel = computed(() => getRelativeTime(product.value.releasedAt));

const detailHighlights = computed(() => [
  {
    label: "Material",
    value: product.value.material ?? "Premium finish",
    icon: "pi pi-box",
  },
  {
    label: "Fit Profile",
    value: product.value.fit ?? "Regular",
    icon: "pi pi-sparkles",
  },
  {
    label: "Size Range",
    value: product.value.sizeRange ?? "UK 6-10",
    icon: "pi pi-expand-arrows-alt",
  },
  {
    label: "Latest Drop",
    value: releasedLabel.value,
    icon: "pi pi-calendar",
  },
]);

const wearMoments = computed(() => {
  const category = (product.value.category ?? "").toLowerCase();

  if (category.includes("running")) {
    return [
      "Daily training with lightweight comfort underfoot.",
      "Fast errands and long days when breathable support matters.",
      "Travel packing where one versatile pair needs to do more.",
    ];
  }

  if (category.includes("slip")) {
    return [
      "Quick coffee runs and easy weekend plans.",
      "Travel days where comfort and convenience matter most.",
      "Relaxed office outfits with a softer, low-effort finish.",
    ];
  }

  if (category.includes("retro") || category.includes("court")) {
    return [
      "Denim, cargos, and clean casual fits through the week.",
      "Evening plans that need a sharper sneaker profile.",
      "Everyday wear with classic styling and dependable comfort.",
    ];
  }

  return [
    "All-day city wear with comfortable cushioning.",
    "Easy styling for everyday outfits and weekend plans.",
    "A balanced pick when you want comfort without losing polish.",
  ];
});

const storeBenefits = [
  {
    title: "Free shipping",
    description: "Orders above Rs. 6,000 are delivered at no extra cost.",
    icon: "pi pi-truck",
  },
  {
    title: "Size exchange",
    description: "Simple size swaps if you want a tighter or roomier fit.",
    icon: "pi pi-refresh",
  },
  {
    title: "Curated selection",
    description: "Every pair is chosen for comfort, styling range, and finish.",
    icon: "pi pi-check-circle",
  },
];
</script>

<template>
  <section v-if="!state.isLoading" class="px-4 pt-8 pb-16">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6">
        <RouterLink
          to="/collections"
          class="inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/80 p-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-700 shadow-lg shadow-stone-200/40 backdrop-blur transition hover:border-stone-300 hover:text-stone-900 cursor-pointer"
          aria-label="Go back"
        >
          <span
            class="flex items-center justify-center text-white rounded-full h-9 w-9 bg-stone-900"
          >
            <i class="text-xs pi pi-arrow-left"></i>
          </span>
          Back
        </RouterLink>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="space-y-6">
          <div
            class="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#efe2d6_0%,#f8f3eb_48%,#ffffff_100%)] p-4 shadow-xl shadow-stone-200/50 sm:p-6"
          >
            <div
              class="absolute w-32 h-32 rounded-full -left-8 top-10 bg-white/80 blur-3xl"
            ></div>
            <div
              class="absolute -right-6 bottom-0 h-40 w-40 rounded-full bg-[#c56232]/20 blur-3xl"
            ></div>

            <div class="relative overflow-hidden rounded-4xl bg-white/75">
              <span
                v-if="product.badge"
                class="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-700 shadow-sm"
              >
                {{ product.badge }}
              </span>

              <img
                :src="product.image"
                :alt="product.name"
                class="object-cover w-full h-105 sm:h-140"
              />

              <div
                class="absolute inset-x-4 bottom-4 rounded-[1.75rem] bg-stone-900/88 p-5 text-white shadow-xl backdrop-blur"
              >
                <div class="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p
                      class="text-xs uppercase tracking-[0.3em] text-stone-300"
                    >
                      {{ product.brand }} / {{ product.category }}
                    </p>
                    <p
                      class="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
                    >
                      {{ product.name }}
                    </p>
                  </div>

                  <div class="text-left sm:text-right">
                    <p
                      class="text-xs uppercase tracking-[0.25em] text-stone-300"
                    >
                      Store Price
                    </p>
                    <p class="mt-1 text-2xl font-semibold">
                      {{ formatPrice(product.price) }}
                    </p>
                    <p
                      v-if="hasDiscount"
                      class="text-sm line-through text-stone-300"
                    >
                      {{ formatPrice(product.originalPrice) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <article
              v-for="highlight in detailHighlights"
              :key="highlight.label"
              class="rounded-[1.75rem] border border-white/80 bg-white/75 p-5 shadow-lg shadow-stone-200/40 backdrop-blur"
            >
              <span
                class="flex items-center justify-center text-white rounded-full h-11 w-11 bg-stone-900"
              >
                <i :class="highlight.icon"></i>
              </span>
              <p
                class="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500"
              >
                {{ highlight.label }}
              </p>
              <p class="mt-2 text-lg font-semibold text-stone-900">
                {{ highlight.value }}
              </p>
            </article>
          </div>

          <div class="flex flex-col items-stretch justify-start gap-4">
            <article
              class="p-6 border shadow-lg rounded-4xl border-white/80 bg-white/75 shadow-stone-200/40 backdrop-blur"
            >
              <p
                class="text-sm font-semibold uppercase tracking-[0.3em] text-[#c56232]"
              >
                Available Colors
              </p>
              <h2
                class="mt-3 text-3xl font-semibold tracking-tight text-stone-900"
              >
                Built to look good from every angle.
              </h2>
              <div class="flex flex-wrap gap-3 mt-5">
                <span
                  v-for="color in product.colors"
                  :key="color"
                  class="rounded-full bg-[#f7f1e8] px-4 py-2 text-sm font-medium text-stone-700"
                >
                  {{ color }}
                </span>
              </div>
              <p class="mt-5 text-base leading-7 text-stone-600">
                Each colorway stays wearable and easy to style, whether you want
                a sharper neutral palette or something with a little more
                energy.
              </p>
            </article>

            <article
              class="rounded-4xl border border-white/80 bg-[#eaded0]/90 p-6 shadow-lg shadow-stone-200/40"
            >
              <p
                class="text-sm font-semibold uppercase tracking-[0.3em] text-[#c56232]"
              >
                Best For
              </p>
              <div class="mt-5 space-y-3">
                <div
                  v-for="moment in wearMoments"
                  :key="moment"
                  class="flex items-start gap-3 px-4 py-4 rounded-3xl bg-white/70"
                >
                  <span
                    class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-xs text-white"
                  >
                    <i class="pi pi-check"></i>
                  </span>
                  <p class="text-sm leading-7 text-stone-700">{{ moment }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="space-y-6">
          <div
            class="rounded-[2.25rem] border border-white/80 bg-white/80 p-7 shadow-xl shadow-stone-200/40 backdrop-blur"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.35em] text-[#c56232]"
            >
              Product Details
            </p>
            <h1
              class="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl"
            >
              {{ product.name }}
            </h1>
            <p class="mt-3 text-lg leading-8 text-stone-600">
              {{ product.tagline }}
            </p>

            <div
              class="flex flex-wrap items-center gap-3 mt-6 text-sm text-stone-600"
            >
              <span
                class="inline-flex items-center gap-2 rounded-full bg-[#f7f1e8] px-4 py-2 font-medium text-stone-800"
              >
                <i class="pi pi-star-fill text-[#c56232]"></i>
                {{ product.rating }} rating
              </span>
              <span>{{ product.reviews }} reviews</span>
              <span class="text-stone-400">/</span>
              <span>Released {{ releasedLabel }}</span>
            </div>

            <p class="mt-6 text-base leading-8 text-stone-600">
              {{ product.description }}
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p
                  class="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500"
                >
                  Price
                </p>
                <div class="flex flex-wrap items-end gap-3 mt-2">
                  <p
                    class="text-4xl font-semibold tracking-tight text-stone-900"
                  >
                    {{ formatPrice(product.price) }}
                  </p>
                  <p
                    v-if="hasDiscount"
                    class="pb-1 text-lg line-through text-stone-400"
                  >
                    {{ formatPrice(product.originalPrice) }}
                  </p>
                </div>
                <p
                  v-if="hasDiscount"
                  class="mt-2 text-sm font-medium text-[#c56232]"
                >
                  Save {{ formatPrice(savingsAmount) }} ({{ savingsPercent }}%
                  off)
                </p>
              </div>

              <div class="px-5 py-4 rounded-3xl bg-stone-100/80">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500"
                >
                  Availability
                </p>
                <p class="mt-2 text-sm font-medium text-stone-800">
                  In stock in {{ product.sizeRange }}
                </p>
              </div>
            </div>

            <div class="mt-8">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <p
                  class="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500"
                >
                  Select Size
                </p>
                <button
                  type="button"
                  class="text-sm font-medium text-[#c56232] transition hover:text-[#9a4e28]"
                >
                  Size guide
                </button>
              </div>

              <div class="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3">
                <button
                  v-for="size in availableSizes"
                  :key="size"
                  type="button"
                  class="rounded-[1.25rem] border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 mt-8">
              <button
                type="button"
                class="rounded-full bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c56232]"
              >
                {{ ctaLabel }}
              </button>
              <button
                type="button"
                class="rounded-full border border-stone-300 px-6 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
              >
                {{ secondaryCtaLabel }}
              </button>
            </div>
          </div>

          <div
            class="p-6 text-white shadow-xl rounded-4xl bg-stone-900 shadow-stone-300/40"
          >
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p
                  class="text-sm font-semibold uppercase tracking-[0.3em] text-[#f2b18d]"
                >
                  Store Promise
                </p>
                <h2 class="mt-3 text-3xl font-semibold tracking-tight">
                  Confidence before checkout.
                </h2>
              </div>

              <span
                class="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-200"
              >
                {{ product.fit }} fit
              </span>
            </div>

            <div class="mt-6 space-y-3">
              <article
                v-for="benefit in storeBenefits"
                :key="benefit.title"
                class="flex items-start gap-4 px-5 py-4 rounded-3xl bg-white/5"
              >
                <span
                  class="flex items-center justify-center text-white rounded-full h-11 w-11 bg-white/10"
                >
                  <i :class="benefit.icon"></i>
                </span>
                <div>
                  <p class="text-lg font-semibold">{{ benefit.title }}</p>
                  <p class="mt-1 text-sm leading-7 text-stone-300">
                    {{ benefit.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
