/**
 * @name applications
 * @type {Array<import("single-spa").RegisterApplicationConfig>}
 */
const applications = [
  {
    name: "layout-app",
    app: () => System.import("@single-spa-example/layout-app"),
    activeWhen: (location) => location.pathname.startsWith("/"),
  },
];

export default applications;
