const containerSelectors = `#container`;

/**
 * @name applications
 * @type {Array<{
 *   id: string
 *   loadLifecycles: () => Promise<{
 *     mount: ({ containerSelectors, basename }) => void,
 *     unmount: ({ containerSelectors }) => void,
 *   }>,
 *   linkChildren: string,
 *   props: {
 *     containerSelectors: string,
 *     basename: string,
 *   },
 *   path: string,
 * }>}
 */
const applications = [
  {
    id: "react-app",
    loadLifecycles: () => import("react_app/lifecycles"),
    linkChildren: "React App",
    props: {
      containerSelectors,
      basename: "/react",
    },
    path: "/react(.*)",
  },
  {
    id: "nested-react-app",
    loadLifecycles: () => import("react_app/lifecycles"),
    linkChildren: "Nested React App",
    props: {
      containerSelectors,
      basename: "/nested/react",
    },
    path: "/nested/react(.*)",
  },
  {
    id: "vue-app",
    loadLifecycles: () => import("vue_app/lifecycles"),
    linkChildren: "Vue App",
    props: {
      containerSelectors,
      basename: "/vue",
    },
    path: "/vue(.*)",
  },
  {
    id: "nested-vue-app",
    loadLifecycles: () => import("vue_app/lifecycles"),
    linkChildren: "Nested Vue App",
    props: {
      containerSelectors,
      basename: "/nested/vue",
    },
    path: "/nested/vue(.*)",
  },
];

export default applications;
