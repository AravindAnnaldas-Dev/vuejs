<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  brand: "",
  category: "",
  tagline: "",
  price: "",
  originalPrice: "",
  fit: "",
  sizeRange: "",
  material: "",
  colors: "",
  badge: "",
  image: "",
  description: "",
});
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <div class="mb-8">
      <p
        class="text-sm font-semibold uppercase tracking-[0.4em] text-[#c56232]"
      >
        Inventory Management
      </p>
      <h1 class="mt-3 text-4xl font-semibold tracking-tight text-stone-900">
        Add New Shoe
      </h1>
      <p class="mt-3 text-base leading-7 text-stone-600">
        Fill out the details below to add a new pair to the collection.
      </p>
    </div>

    <form
      class="space-y-8 bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Basic Details -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700"
            >Shoe Name</label
          >
          <input
            type="text"
            v-model="form.name"
            placeholder="e.g. Street Glide 01"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700">Brand</label>
          <input
            type="text"
            v-model="form.brand"
            placeholder="e.g. Nimbus"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700"
            >Category</label
          >
          <input
            type="text"
            v-model="form.category"
            placeholder="e.g. Lifestyle Sneaker"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700">Badge</label>
          <input
            type="text"
            v-model="form.badge"
            placeholder="e.g. Best Seller"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <div class="space-y-2 sm:col-span-2">
          <label class="block text-sm font-medium text-stone-700"
            >Tagline</label
          >
          <input
            type="text"
            v-model="form.tagline"
            placeholder="Short impactful sentence"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <!-- Pricing -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700"
            >Price (₹)</label
          >
          <input
            type="number"
            v-model="form.price"
            placeholder="8499"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700"
            >Original Price (₹)</label
          >
          <input
            type="number"
            v-model="form.originalPrice"
            placeholder="9999"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <!-- Specifications -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700">Fit</label>
          <select
            v-model="form.fit"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition appearance-none"
          >
            <option disabled value="">Select fit</option>
            <option value="regular">Regular</option>
            <option value="true-to-size">True to size</option>
            <option value="snug">Snug</option>
            <option value="performance">Performance</option>
            <option value="relaxed">Relaxed</option>
          </select>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700"
            >Size Range</label
          >
          <input
            type="text"
            v-model="form.sizeRange"
            placeholder="e.g. UK 6-10"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700"
            >Material</label
          >
          <input
            type="text"
            v-model="form.material"
            placeholder="e.g. Suede + mesh"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-stone-700"
            >Colors (comma separated)</label
          >
          <input
            type="text"
            v-model="form.colors"
            placeholder="e.g. Sand, Bone, Clay"
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <!-- Media & Description -->
        <div class="space-y-2 sm:col-span-2">
          <label class="block text-sm font-medium text-stone-700"
            >Image URL</label
          >
          <input
            type="url"
            v-model="form.image"
            placeholder="https://images.unsplash.com/photo-..."
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition"
          />
        </div>

        <div class="space-y-2 sm:col-span-2">
          <label class="block text-sm font-medium text-stone-700"
            >Description</label
          >
          <textarea
            v-model="form.description"
            rows="4"
            placeholder="Detailed description of the shoe..."
            class="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c56232] focus:border-transparent transition resize-none"
          ></textarea>
        </div>
      </div>

      <!-- Action Buttons -->
      <div
        class="flex flex-wrap items-center justify-end gap-4 pt-6 mt-8 border-t border-stone-100"
      >
        <button
          type="button"
          class="px-6 py-3.5 text-sm font-semibold text-stone-700 bg-white border border-stone-300 rounded-full hover:border-stone-900 hover:text-stone-900 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          @click.prevent
          class="px-8 py-3.5 text-sm font-semibold text-white bg-stone-900 rounded-full hover:bg-[#c56232] transition"
        >
          Add Shoe
        </button>
      </div>
    </form>
  </div>
</template>
