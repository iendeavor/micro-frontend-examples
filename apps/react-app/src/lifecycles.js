import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

export const mount = ({ container, entry }) => {
  ReactDOM.render(<App entry={entry} />, container);
};

export const unmount = ({ container }) => {
  ReactDOM.unmountComponentAtNode(container);
};
