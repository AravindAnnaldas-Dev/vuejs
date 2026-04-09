<script setup>
import { computed } from "vue";
import ShoeCard from "@/components/ShoeCard.vue";

const props = defineProps({
  shoes: {
    type: Array,
    required: true,
  },
  limit: Number,
});

const shoesToShow = computed(() =>
  typeof props.limit === "number"
    ? props.shoes.slice(0, props.limit)
    : props.shoes,
);
</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    <ShoeCard
      v-for="shoe in shoesToShow"
      :key="shoe.id"
      :shoe="shoe"
      :description-length="110"
    />
  </div>
</template>
