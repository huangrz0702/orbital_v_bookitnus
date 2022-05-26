import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";

//Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name:"HomePage",
      component: HomePage,
    },

    {
      path: "/AdHomePage",
      name: "AdHomePage",
      component: () => import("../views/Admin-Main/AdHome.vue"),
    },
    
    {
      path: "/RegisterPage",
      name:"RegisterPage",
      component: () => import("../views/RegisterPage.vue"),
    },
    {
      path: "/LoginPage",
      name:"LoginPage",
      component: () => import("../views/LoginPage.vue"),
    },

    {
      path: "/AdminLogin",
      name:"AdminLogin",
      component: () => import("../views/AdLoginPage.vue"),
    },

    {
      path: "/ProfilePage",
      name:"ProfilePage",
      component: () => import("../views/UserProfile/ProfilePage.vue"),
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;