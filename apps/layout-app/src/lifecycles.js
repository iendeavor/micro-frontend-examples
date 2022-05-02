import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import { foo } from "foo";
foo();

export const mount = ({ containerSelectors, basename }) => {
  ReactDOM.render(
    <App basename={basename} />,
    document.querySelector(containerSelectors)
  );
};

export const unmount = ({ containerSelectors }) => {
  ReactDOM.unmountComponentAtNode(containerSelectors);
};
