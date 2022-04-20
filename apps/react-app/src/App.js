import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";

const LazyHome = lazy(() => import("./views/Home"));
const LazyAbout = lazy(() => import("./views/About"));
const LazyAboutDetail = lazy(() => import("./views/AboutDetail"));

const Home = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyHome />
    </Suspense>
  );
};
const About = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyAbout />
    </Suspense>
  );
};
const AboutDetail = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyAboutDetail />
    </Suspense>
  );
};

const App = ({ entry }) => {
  return (
    <React.StrictMode>
      <BrowserRouter basename={entry}>
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
