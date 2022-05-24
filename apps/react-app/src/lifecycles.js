import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

export const mount = ({ containerSelectors, basename }) => {
  ReactDOM.render(
    <App basename={basename} />,
    document.querySelector(containerSelectors)
  );
};

export const unmount = ({ containerSelectors }) => {
  ReactDOM.unmountComponentAtNode(document.querySelector(containerSelectors));
};
