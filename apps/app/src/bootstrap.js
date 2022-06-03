import "./service-locator";

// we don't care about routes for now
// we can use react-router or similar to handle routes in the future if we want.
(async () => {
  const layoutApp = await window.serviceLocator.resolve("layout-app");
  layoutApp.mount({
    containerSelectors: "#app",
    basename: "/",
  });
})();
