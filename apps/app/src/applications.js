/**
 * @name applications
 * @type {Array<import("qiankun").LoadableApp>}
 */
const applications = [
  {
    name: "layout-app",
    entry: {
      html: '<div id="app"></div>',
      scripts: ["//localhost:3001/main.js"],
    },
    activeRule: () => true,
    container: "#app",
    props: {
      basename: "/",
    },
  },
];

export default applications;
