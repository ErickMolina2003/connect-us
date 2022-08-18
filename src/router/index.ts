import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainLayout from "@/components/layouts/main-layout.vue";
import LogIn from "@/components/log-in.vue";
import TicketsComponent from "@/components/tickets-component.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/proyectos",
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
      {
        path: "/ticket",
        name: "ticket",
        component: TicketsComponent,
      },
    ],
  },
  {
    path: "/",
    name: "login",
    component: LogIn,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
