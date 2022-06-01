import React, { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { pathToRegexp } from "path-to-regexp";
import applications from "./applications";

const App = ({ basename }) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={basename + "*"} element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    let mounted = false;
    let application = null;
    let applicationLifecycleHooks = null;

    (async () => {
      application = applications.find((application) =>
        pathToRegexp(application.path).test(location.pathname)
      );
      if (application === undefined) return;

      applicationLifecycleHooks = await application.loadLifecycleHooks();
      if (cancelled) return;

      applicationLifecycleHooks.mount(application.props);
      mounted = true;
    })();

    return () => {
      cancelled = true;
      if (mounted === false) return;

      applicationLifecycleHooks.unmount(application.props);
    };
  }, [location.pathname]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>

          {applications.map((application) => {
            return (
              <li key={application.id}>
                <Link to={application.props.basename}>
                  {application.linkChildren}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "cyan",
        }}
      >
        <h1>App ({location.pathname})</h1>
      </div>

      <div id="container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
