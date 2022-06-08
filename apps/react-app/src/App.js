import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";

const HomeLazy = lazy(() => import("./views/Home"));
const Home = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HomeLazy />
    </Suspense>
  );
};

const AboutLazy = lazy(() => import("./views/About"));
const About = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AboutLazy />
    </Suspense>
  );
};

const AboutDetailLazy = lazy(() => import("./views/AboutDetail"));
const AboutDetail = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AboutDetailLazy />
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
