import React, { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

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

const applications = [
  {
    id: "react-app",
    basename: "/react",
  },
  {
    id: "react-app",
    basename: "/nested/react",
  },
  {
    id: "vue-app",
    basename: "/vue",
  },
  {
    id: "vue-app",
    basename: "/nested/vue",
  },
];

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    let app = null;
    let basename = null;
    const containerSelectors = "#container";
    (async () => {
      const application = applications.find((application) =>
        location.pathname.startsWith(application.basename)
      );
      if (application === undefined) return;
      const id = application.id;
      basename = application.basename;
      app = await serviceLocator.resolve(id);

      app.mount({
        containerSelectors,
        basename,
      });
    })();

    return () => {
      app?.unmount({
        containerSelectors,
        basename,
      });
      app = null;
    };
  }, [location.pathname]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li key="react">
            <Link to="/react">React</Link>
          </li>
          <li key="nested-react">
            <Link to="/nested/react">Nested React</Link>
          </li>
          <li key="vue">
            <Link to="/vue">Vue</Link>
          </li>
          <li key="nested-vue">
            <Link to="/nested/vue">Nested Vue</Link>
          </li>
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
