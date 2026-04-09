import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CollectionView from "@/views/CollectionView.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import ShoeCardDetails from "@/views/ShoeCardDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/collections",
      name: "collections",
      component: CollectionView,
    },
    {
      path: "/collections/:id",
      name: "collection",
      component: ShoeCardDetails,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: PageNotFound,
      props: (route) => ({
        requestedPath: route.fullPath,
      }),
    },
  ],
});

export default router;
