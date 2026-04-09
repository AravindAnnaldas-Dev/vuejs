<script setup>
import { computed, ref } from "vue";
import { formatPrice, getRelativeTime } from "@/utils/productFormatter";
import { RouterLink } from "vue-router";

const props = defineProps({
  shoe: {
    type: Object,
    required: true,
  },
  descriptionLength: {
    type: Number,
    default: 110,
  },
});

const showFullDescription = ref(false);

const toggleShowMore = () => {
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  let description = props.shoe.description ?? "";

  if (
    !showFullDescription.value &&
    description.length > props.descriptionLength
  ) {
    description = `${description.substring(0, props.descriptionLength).trimEnd()}...`;
  }

  return description;
});

const hasDiscount = computed(
  () =>
    typeof props.shoe.originalPrice === "number" &&
    props.shoe.originalPrice > props.shoe.price,
);
</script>

<template>
  <RouterLink :to="'/collection/' + shoe.id">
    <article
      class="flex flex-col h-full overflow-hidden transition duration-300 bg-white border shadow-sm group rounded-4xl border-stone-200/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-200/70"
    >
      <figure
        class="relative overflow-hidden bg-[linear-gradient(135deg,#f5ede4_0%,#ffffff_50%,#efe2d6_100%)]"
      >
        <span
          v-if="shoe.badge"
          class="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-700 shadow-sm"
        >
          {{ shoe.badge }}
        </span>

        <span
          class="absolute z-10 px-3 py-2 text-xs font-semibold text-white rounded-full shadow-lg right-5 top-5 bg-stone-900 shadow-stone-300/50"
        >
          {{ formatPrice(shoe.price) }}
        </span>

        <img
          :src="shoe.image"
          :alt="shoe.name"
          class="object-cover w-full transition duration-500 h-72 group-hover:scale-105"
        />
      </figure>

      <div class="flex flex-col flex-1 gap-5 p-6">
        <div>
          <p
            class="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500"
          >
            {{ shoe.brand }} / {{ shoe.category }}
          </p>

          <div class="flex items-start justify-between gap-4 mt-3">
            <div>
              <h2 class="text-2xl font-semibold tracking-tight text-stone-900">
                {{ shoe.name }}
              </h2>
              <p class="mt-1 text-sm text-stone-600">{{ shoe.tagline }}</p>
            </div>

            <p v-if="hasDiscount" class="text-sm line-through text-stone-400">
              {{ formatPrice(shoe.originalPrice) }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="color in shoe.colors"
            :key="color"
            class="rounded-full bg-[#f7f1e8] px-3 py-1 text-xs font-medium text-stone-700"
          >
            {{ color }}
          </span>
        </div>

        <div>
          <p class="text-sm leading-7 text-stone-600">
            {{ truncatedDescription }}
          </p>
          <button
            v-if="props.shoe.description.length > props.descriptionLength"
            type="button"
            class="mt-2 text-sm font-medium text-[#c56232] transition hover:text-[#9a4e28]"
            @click="toggleShowMore"
          >
            {{ showFullDescription ? "Show less" : "Read more" }}
          </button>
        </div>

        <div
          class="grid grid-cols-3 gap-3 p-4 text-sm rounded-3xl bg-stone-100/80"
        >
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-stone-500">Fit</p>
            <p class="mt-2 font-medium text-stone-800">{{ shoe.fit }}</p>
          </div>

          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-stone-500">
              Sizes
            </p>
            <p class="mt-2 font-medium text-stone-800">{{ shoe.sizeRange }}</p>
          </div>

          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-stone-500">
              Material
            </p>
            <p class="mt-2 font-medium text-stone-800">{{ shoe.material }}</p>
          </div>
        </div>

        <div
          class="flex items-center justify-between pt-4 mt-auto border-t border-stone-200"
        >
          <div>
            <div
              class="flex items-center gap-2 text-sm font-medium text-stone-700"
            >
              <i class="pi pi-star-fill text-[#c56232]"></i>
              <span>{{ shoe.rating }}</span>
              <span class="text-stone-400">({{ shoe.reviews }} reviews)</span>
            </div>
            <p class="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">
              Released {{ getRelativeTime(shoe.releasedAt) }}
            </p>
          </div>

          <button
            class="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c56232]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  </RouterLink>
</template>
