import "./public-path";
import { registerMicroApps, start } from "qiankun";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import applications from "./applications";

// import { foo } from "foo";
// foo();

export const bootstrap = async (props) => {};

export const mount = async (props) => {
  ReactDOM.render(
    <App basename={props.basename} />,
    props.container.querySelector("#app")
  );

  registerMicroApps(applications.map((application) => application.qiankun));
  start();
};

export const unmount = async (props) => {
  ReactDOM.unmountComponentAtNode(props.container.querySelector("#app"));
};
