const containerSelectors = "#app";

/**
 * @name applications
 * @type {Array<{
 *   id: string
 *   loadLifecycles: () => Promise<{
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
    loadLifecycles: () => import("layout_app/lifecycles"),
    props: {
      containerSelectors,
      basename: "/",
    },
    path: "/(.*)",
  },
];

export default applications;
