import React from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const location = useLocation();

  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "blue",
        color: "white",
      }}
    >
      <h1>Home ({location.pathname})</h1>
    </div>
  );
};
