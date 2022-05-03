import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App.js";
import applications from "./applications";

import { foo } from "foo";
foo();

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const bootstrap = [
  async (props) => {
    applications
      .map((application) => application.singleSpa)
      .forEach(props.singleSpa.registerApplication);
  },
  lifecycles.bootstrap,
];

export const mount = lifecycles.mount;

export const unmount = lifecycles.unmount;

export const update = lifecycles.update;
