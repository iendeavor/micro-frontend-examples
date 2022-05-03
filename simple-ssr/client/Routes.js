import React from "react";
import { Routes as _Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Routes = () => {
  return (
    <_Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </_Routes>
  );
};

export default Routes;
