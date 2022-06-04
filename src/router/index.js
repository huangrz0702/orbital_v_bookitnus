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

    {
      path: "/AboutPage",
      name:"AboutPage",
      component: () => import("../views/About.vue"),
    },

    {
      path: "/ContactPage",
      name:"ContactPage",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/Searchmain",
      name:"Searchmain",
      component: () => import("../views/Search-Main/index.vue"),
    },
    {
      path: "/BlogCreate",
      name:"BlogCreate",
      component: () => import("../views/Forum/BlogCreate.vue"),
    },
    {
      path: "/BlogMain",
      name:"BlogMain",
      component: () => import("../views/Forum/BlogMain.vue"),
    },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;