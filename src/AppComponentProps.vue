<!-- Component Props -->

<script setup>
import Heading from "@/components/Heading.vue";
import FeatureCard from "./components/FeatureCard.vue";
</script>

<template>
  <Heading title="Vue JS demo component to use now." />

  <div class="grid gap-4">
    <FeatureCard
      eyebrow="Demo"
      title="Lifestyle Pair"
      description="Reusable showcase card for shoe-focused layouts."
      image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
      surface-class="bg-[#eaded0]"
    />

    <FeatureCard
      eyebrow="Demo"
      title="Running Pair"
      description="A second example using the same component with different imagery."
      image="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80"
      surface-class="bg-[#f3e7dc]"
    />
  </div>
</template>
