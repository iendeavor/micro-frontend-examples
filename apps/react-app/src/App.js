import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";

const Home = () => {
  const Home = lazy(() => import("./views/Home"));

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Home />
    </Suspense>
  );
};

const About = () => {
  const About = lazy(() => import("./views/About"));

  return (
    <Suspense fallback={<div>loading...</div>}>
      <About />
    </Suspense>
  );
};

const AboutDetail = () => {
  const AboutDetail = lazy(() => import("./views/AboutDetail"));

  return (
    <Suspense fallback={<div>loading...</div>}>
      <AboutDetail />
    </Suspense>
  );
};

const App = ({ basename }) => {
  return (
    <React.StrictMode>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about/detail" element={<AboutDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">React App Home</Link>
          </li>
          <li>
            <Link to="/about">React App About</Link>
          </li>
          <li>
            <Link to="/about/detail">React App About Detail</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;
