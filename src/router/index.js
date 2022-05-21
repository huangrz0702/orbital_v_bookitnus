import { createRouter, createWebHistory } from "vue-router";
import layout from "@/layout";

const routes = [
    {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    },

    {
        
        path: "/",
        name: "layout",
        component: layout,
        redirect: "/index",
        children: [
            {
                path: "/about",
                name: "AboutPage",
                component: () => import("../views/AboutPage/About.vue"),
                meta: {
                    reqiresAuth: true,
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
