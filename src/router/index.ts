import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainLayout from "@/components/layouts/main-layout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    children: [
      {
        path: "/proyectos",
        name: "proyectos",
        component: () => import("@/components/proyectos-component.vue"),
      },
      {
        path: "/tickets",
        name: "tickets",
        component: () => import("@/components/tickets-component.vue"),
      },
      {
        path: "/detalle/*",
        name: "detalle",
        component: () => import("@/components/detalle-proyecto.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
