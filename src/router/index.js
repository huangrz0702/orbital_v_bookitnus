import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";

//Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/RegisterPage",
      component: () => import("../views/RegisterPage.vue"),
    },
    {
      path: "/LoginPage",
      component: () => import("../views/LoginPage.vue"),
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;