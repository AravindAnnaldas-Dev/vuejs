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
    key: "jobs",
    label: "Jobs",
    path: "/jobs",
  },
];

const handleActiveMenu = (pathname = route.path) => {
  const normalizedPath =
    pathname === "/" ? pathname : pathname.replace(/\/+$/, "");

  const activeItem = menuItems.find(({ path }) =>
    path === "/"
      ? normalizedPath === path
      : normalizedPath === path || normalizedPath.startsWith(`${path}/`),
  );

  return activeItem?.key ?? "";
};

const activeMenu = computed(() => handleActiveMenu(route.path));

const handleToggleMenu = () => {
  showMenuToggle.value = !showMenuToggle.value;
};
</script>

<template>
  <nav
    class="fixed top-0 z-20 w-full bg-white border-b border-gray-200 shadow-sm"
  >
    <div
      class="flex flex-wrap items-center justify-between p-4 mx-auto max-w-7xl"
    >
      <RouterLink to="/" class="flex items-center space-x-3">
        <img
          src="/images/aravind_pic.jpeg"
          class="rounded-full h-7"
          alt="Logo"
        />
        <span
          class="self-center text-xl font-semibold text-gray-900 whitespace-nowrap"
        >
          Aravind
        </span>
      </RouterLink>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="inline-flex items-center justify-center w-10 h-10 p-2 text-gray-600 rounded-md md:hidden hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
        @click="handleToggleMenu"
      >
        <i v-if="showMenuToggle" class="pi pi-times"></i>
        <i v-else class="pi pi-bars"></i>
      </button>

      <!-- Menu -->
      <div
        :class="[
          showMenuToggle ? 'block' : 'hidden',
          'w-full md:block md:w-auto',
        ]"
      >
        <ul
          class="flex flex-col p-4 mt-4 font-medium border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:p-0"
        >
          <li
            class="not-last:mr-4"
            v-for="menuItem in menuItems"
            :key="menuItem.key"
          >
            <RouterLink
              :to="menuItem.path"
              @click="showMenuToggle = false"
              :aria-current="activeMenu === menuItem.key ? 'page' : undefined"
              :class="[
                activeMenu === menuItem.key
                  ? 'text-white bg-blue-600'
                  : 'text-blue-600 bg-transparent',
                'block px-3 py-2 rounded',
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
