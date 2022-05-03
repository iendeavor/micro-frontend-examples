import { containerId } from "../../shared";

const containerSelectors = `#${containerId}`;

/**
 * @name applications
 * @type {Array<{ qiankun: import("qiankun").RegisterApplicationConfig, routeProps: { linkChildren: string } }>}
 */
const applications = [
  {
    qiankun: {
      name: "react-app",
      entry: {
        html: '<div id="app"></div>',
        scripts: ["//localhost:3002/main.js"],
      },
      container: containerSelectors,
      activeRule: (location) => location.pathname.startsWith("/react"),
      props: {
        basename: "/react",
      },
    },
    routeProps: {
      linkChildren: "React App",
    },
  },
  {
    qiankun: {
      name: "nested-react-app",
      entry: {
        html: '<div id="app"></div>',
        scripts: ["//localhost:3002/main.js"],
      },
      container: containerSelectors,
      activeRule: (location) => location.pathname.startsWith("/nested/react"),
      props: {
        basename: "/nested/react",
      },
    },
    routeProps: {
      linkChildren: "Nested React App",
    },
  },
  {
    qiankun: {
      name: "vue-app",
      entry: {
        html: '<div id="app"></div>',
        scripts: ["//localhost:3003/main.js"],
      },
      container: containerSelectors,
      activeRule: (location) => location.pathname.startsWith("/vue"),
      props: {
        basename: "/vue",
      },
    },
    routeProps: {
      linkChildren: "Vue App",
    },
  },
  {
    qiankun: {
      name: "nested-vue-app",
      entry: {
        html: '<div id="app"></div>',
        scripts: ["//localhost:3003/main.js"],
      },
      container: containerSelectors,
      activeRule: (location) => location.pathname.startsWith("/nested/vue"),
      props: {
        basename: "/nested/vue",
      },
    },
    routeProps: {
      linkChildren: "Nested Vue App",
    },
  },
];

export default applications;
