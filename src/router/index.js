import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/portada",
    name: "home",
    component: () => import("../components/portada.vue"),
    
  },
  {
    path: "/registro-usuario",
    name: "registro usuario",
    component: () => import("../components/usuarios/registro.vue"),
  },

  {
    path: "/sesion",
    name: "registro usuario",
    component: () => import("../components/usuarios/sesion.vue"),
  },

  {
    path: "/portafolios",
    name: "registro usuario",
    component: () => import("../components/portafolios.vue"),
  },

  {
    path: "/nosotros",
    name: "registro usuario",
    component: () => import("../components/nosotros.vue"),
  },
  
  {
    path: "/contacto",
    name: "registro usuario",
    component: () => import("../components/contacto.vue"),
  },


  {
    path: "/view",
    name: "view",
    component: () => import("../components/ListComponent"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/EditComponent"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
