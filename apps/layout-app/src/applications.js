const containerSelectors = `#container`;

/**
 * @name applications
 * @type {Array<{
 *   id: string
 *   loadLifecycleHooks: () => Promise<{
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
    loadLifecycleHooks: () => import("react_app/lifecycle-hooks"),
    linkChildren: "React App",
    props: {
      containerSelectors,
      basename: "/react",
    },
    path: "/react(.*)",
  },
  {
    id: "nested-react-app",
    loadLifecycleHooks: () => import("react_app/lifecycle-hooks"),
    linkChildren: "Nested React App",
    props: {
      containerSelectors,
      basename: "/nested/react",
    },
    path: "/nested/react(.*)",
  },
  {
    id: "vue-app",
    loadLifecycleHooks: () => import("vue_app/lifecycle-hooks"),
    linkChildren: "Vue App",
    props: {
      containerSelectors,
      basename: "/vue",
    },
    path: "/vue(.*)",
  },
  {
    id: "nested-vue-app",
    loadLifecycleHooks: () => import("vue_app/lifecycle-hooks"),
    linkChildren: "Nested Vue App",
    props: {
      containerSelectors,
      basename: "/nested/vue",
    },
    path: "/nested/vue(.*)",
  },
];

export default applications;
