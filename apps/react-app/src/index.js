import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// import { foo } from "foo";
// foo();

export const bootstrap = async (props) => {};

export const mount = async (props) => {
  ReactDOM.render(
    <App basename={props.basename} />,
    props.container.querySelector("#app")
  );
};

export const unmount = async (props) => {
  ReactDOM.unmountComponentAtNode(props.container.querySelector("#app"));
};
