import { pathToRegexp } from "path-to-regexp";
import applications from "./applications";

// we don't care about routes for now
// we can use react-router or similar to handle routes in the future if we want.
(async () => {
  const activeApplications = applications.filter((application) =>
    pathToRegexp(application.path).test(location.pathname)
  );

  const applicationLifecycleList = await Promise.all(
    activeApplications.map((activeApplication) =>
      activeApplication.loadLifecycleHooks()
    )
  ).catch((error) => {
    console.log("something went wrong", error);
  });
  applicationLifecycleList.forEach((applicationLifecycle, index) =>
    applicationLifecycle.mount(activeApplications[index].props)
  );
})();
