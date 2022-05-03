import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { containerId } from "../../shared";
import applications from "./applications";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>

          {applications.map((application) => {
            return (
              <li key={application.singleSpa.customProps.basename}>
                <Link to={application.singleSpa.customProps.basename}>
                  {application.routeProps.linkChildren}
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

      <div id={containerId}>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
