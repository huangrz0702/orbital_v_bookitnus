import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";

//Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name:"HomePage",
      component: HomePage,
      meta: {
        title: 'Home'
      },
    },

    {
      path: "/AdHomePage",
      name: "AdHomePage",
      component: () => import("../views/Admin-Main/AdHome.vue"),
      meta: {
        title: 'Admin Home'
      },
    },
    
    {
      path: "/RegisterPage",
      name:"RegisterPage",
      component: () => import("../views/RegisterPage.vue"),
      meta: {
        title: 'Register'
      },
    },
    {
      path: "/LoginPage",
      name:"LoginPage",
      component: () => import("../views/LoginPage.vue"),
      meta: {
        title: 'Login'
      },
    },

    {
      path: "/AdminLogin",
      name:"AdminLogin",
      component: () => import("../views/AdLoginPage.vue"),
      meta: { 
        title: 'Admin Login'
      },
    },

    {
      path: "/ProfilePage",
      name:"ProfilePage",
      component: () => import("../views/UserProfile/ProfilePage.vue"),
      meta: {
        title: 'Profile'
      },
    },

    {
      path: "/AboutPage",
      name:"AboutPage",
      component: () => import("../views/About.vue"),
      meta: {
        title: 'About'
      },
    },

    {
      path: "/ContactPage",
      name:"ContactPage",
      component: () => import("../views/Contact.vue"),
      meta: {
        title: 'Contact'
      },
    },
    {
      path: "/Searchmain",
      name:"Searchmain",
      component: () => import("../views/Search-Main/index.vue"),
      meta: {
        title: 'Search'
      },
    },
    {
      path: "/BlogCreate",
      name:"BlogCreate",
      component: () => import("../views/Forum/BlogCreate.vue"),
      meta: {
        title: 'Create Blog'
      },
    },
    {
      path: "/BlogMain",
      name:"BlogMain",
      component: () => import("../views/Forum/BlogMain.vue"),
      meta: {
        title: 'Forum'
      },
    },
    {
      path: "/AllFac",
      name:"AllFac",
      component: () => import("../views/Search-Result/index.vue"),
    },
    {
      path: "/currentBook",
      name:"currentBook",
      component: () => import("../views/UserProfile/currentBook.vue"),
    },
    {
      path: "/sampleBlogPage",
      name:"sampleBlogPage",
      component: () => import("../views/Forum/sample.vue"),
    },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | BOOKit@NUS`;
  next();
})

export default router;