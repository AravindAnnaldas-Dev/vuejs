<script setup>
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const showMenuToggle = ref(false);

const menuItems = [
  {
    key: "home",
    label: "Home",
    path: "/",
  },
  {
    key: "collection",
    label: "Collection",
    path: "/collection",
  },
];

const activeMenu = computed(() => route.name?.toString() ?? "");

const handleToggleMenu = () => {
  showMenuToggle.value = !showMenuToggle.value;
};
</script>

<template>
  <nav
    class="sticky top-0 z-30 border-b border-white/70 bg-[#f7f1e8]/80 backdrop-blur-xl"
  >
    <div
      class="flex flex-wrap items-center justify-between px-4 py-4 mx-auto max-w-7xl"
    >
      <RouterLink to="/" class="flex items-center gap-3">
        <span
          class="flex items-center justify-center text-white rounded-full shadow-lg size-11 bg-stone-900 shadow-stone-300/60"
        >
          <i class="text-sm pi pi-shopping-bag"></i>
        </span>

        <div>
          <p
            class="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-stone-500"
          >
            Soleverse
          </p>
          <p class="text-lg font-semibold tracking-tight text-stone-900">
            Sneaker House
          </p>
        </div>
      </RouterLink>

      <button
        type="button"
        class="inline-flex items-center justify-center w-10 h-10 transition border rounded-full border-stone-200 text-stone-600 hover:bg-white hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-300 md:hidden"
        @click="handleToggleMenu"
      >
        <i v-if="showMenuToggle" class="pi pi-times"></i>
        <i v-else class="pi pi-bars"></i>
      </button>

      <div
        :class="[
          showMenuToggle ? 'block' : 'hidden',
          'w-full md:block md:w-auto',
        ]"
      >
        <ul
          class="flex flex-col p-3 mt-4 border shadow-lg rounded-3xl border-white/70 bg-white/90 shadow-stone-200/50 md:mt-0 md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
        >
          <li v-for="menuItem in menuItems" :key="menuItem.key">
            <RouterLink
              :to="menuItem.path"
              @click="showMenuToggle = false"
              :aria-current="activeMenu === menuItem.key ? 'page' : undefined"
              :class="[
                activeMenu === menuItem.key
                  ? 'bg-stone-900 text-white shadow-lg shadow-stone-300/50'
                  : 'text-stone-600 hover:bg-white hover:text-stone-900',
                'block rounded-full px-4 py-2 text-sm font-medium transition',
              ]"
            >
              {{ menuItem.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
