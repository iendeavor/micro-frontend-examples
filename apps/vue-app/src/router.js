import { createWebHistory, createRouter } from "vue-router";

const createRouterInstance = ({ entry }) => {
  const routes = [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/about/detail",
      component: () => import("./views/AboutDetail.vue"),
    },
  ];

  const router = createRouter({
    history: createWebHistory(entry),
    routes,
  });

  return router;
};

export default createRouterInstance;
