import { containerId } from "../../shared";

const containerSelectors = `#${containerId}`;

/**
 * @name applications
 * @type {Array<{ singleSpa: import("single-spa").RegisterApplicationConfig, routeProps: { linkChildren: string } }>}
 */
const applications = [
  {
    singleSpa: {
      name: "react-app",
      app: () => System.import("@single-spa-example/react-app"),
      activeWhen: (location) => location.pathname.startsWith("/react"),
      customProps: {
        containerSelectors,
        basename: "/react",
      },
    },
    routeProps: {
      linkChildren: "React App",
    },
  },
  {
    singleSpa: {
      name: "nested-react-app",
      app: () => System.import("@single-spa-example/react-app"),
      activeWhen: (location) => location.pathname.startsWith("/nested/react"),
      customProps: {
        containerSelectors,
        basename: "/nested/react",
      },
    },
    routeProps: {
      linkChildren: "Nested React App",
    },
  },
  {
    singleSpa: {
      name: "vue-app",
      app: () => System.import("@single-spa-example/vue-app"),
      activeWhen: (location) => location.pathname.startsWith("/vue"),
      customProps: {
        containerSelectors,
        basename: "/vue",
      },
    },
    routeProps: {
      linkChildren: "Vue App",
    },
  },
  {
    singleSpa: {
      name: "nested-vue-app",
      app: () => System.import("@single-spa-example/vue-app"),
      activeWhen: (location) => location.pathname.startsWith("/nested/vue"),
      customProps: {
        containerSelectors,
        basename: "/nested/vue",
      },
    },
    routeProps: {
      linkChildren: "Nested Vue App",
    },
  },
];

export default applications;
