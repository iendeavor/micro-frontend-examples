import React from "react";
import { StaticRouter } from "react-router-dom/server";
import Layout from "../client/Layout";

const App = ({ url }) => {
  return (
    <StaticRouter location={url}>
      <Layout />
    </StaticRouter>
  );
};

export default App;
