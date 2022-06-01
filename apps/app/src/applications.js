const containerSelectors = "#app";

/**
 * @name applications
 * @type {Array<{
 *   id: string
 *   loadLifecycleHooks: () => Promise<{
 *     mount: ({ containerSelectors, basename }) => void,
 *     unmount: ({ containerSelectors }) => void,
 *   }>,
 *   props: {
 *     containerSelectors: string,
 *     basename: string,
 *   },
 *   path: string
 * }>}
 */
const applications = [
  {
    id: "layout-app",
    loadLifecycleHooks: () => import("layout_app/lifecycle-hooks"),
    props: {
      containerSelectors,
      basename: "/",
    },
    path: "/(.*)",
  },
];

export default applications;
