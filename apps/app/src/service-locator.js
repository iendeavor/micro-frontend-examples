const services = {};

const serviceLocator = {
  register: (name, service) => {
    services[name] = service;
  },
  resolve: async (name) => {
    return services[name]?.() ?? null;
  },
};

serviceLocator.register("layout-app", () => import("@apps/layout-app"));
serviceLocator.register("react-app", () => import("@apps/react-app"));
serviceLocator.register("vue-app", () => import("@apps/vue-app"));
serviceLocator.register("about-uni", () => import("@apps/about-uni"));
serviceLocator.register("about-vue", () => import("@apps/about-vue"));
serviceLocator.register("about-react", () => import("@apps/about-react"));

window.serviceLocator = serviceLocator;
