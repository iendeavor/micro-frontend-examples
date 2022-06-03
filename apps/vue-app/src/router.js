import { createWebHistory, createRouter } from "vue-router";

const createRouterInstance = ({ basename }) => {
  const routes = [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/about",
      component: () => import("./remotes/About.vue"),
    },
    {
      path: "/about/detail",
      component: () => import("./views/AboutDetail.vue"),
    },
  ];

  const router = createRouter({
    history: createWebHistory(basename),
    routes,
  });

  return router;
};

export default createRouterInstance;
