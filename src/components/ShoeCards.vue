<script setup>
import { computed } from "vue";
import ShoeCard from "@/components/ShoeCard.vue";
import shoesList from "@/shoes.json";

const props = defineProps({
  limit: Number,
});

const shoes = computed(() =>
  typeof props.limit === "number" ? shoesList.slice(0, props.limit) : shoesList,
);
</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    <ShoeCard
      v-for="shoe in shoes"
      :key="shoe.id"
      :shoe="shoe"
      :description-length="110"
    />
  </div>
</template>
