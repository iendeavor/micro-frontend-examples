import { createWebHistory, createRouter } from "vue-router";

const createRouterInstance = ({ entry }) => {
  const routes = [
    {
      path: "/",
      component: () => import("./views/Home.js"),
    },
    {
      path: "/react:any(.*)",
      component: () => import("./views/ReactApp.js"),
    },
    {
      path: "/vue:any(.*)",
      component: () => import("./views/VueApp.js"),
    },
    {
      path: "/nested/react:any(.*)",
      component: () => import("./views/nested/ReactApp.js"),
    },
    {
      path: "/nested/vue:any(.*)",
      component: () => import("./views/nested/VueApp.js"),
    },
  ];

  const router = createRouter({
    history: createWebHistory(entry),
    routes,
  });

  return router;
};

export default createRouterInstance;
