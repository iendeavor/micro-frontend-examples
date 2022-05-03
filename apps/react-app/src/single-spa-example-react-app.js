import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App.js";

import { foo } from "foo";
foo();

const lifecycles = singleSpaReact({
  React,
  domElementGetter: (props) => document.querySelector(props.containerSelectors),
  ReactDOM,
  rootComponent: App,
});

export const bootstrap = [
  // waiting for layout-app ready
  async (props) => {
    while (true) {
      const container = document.querySelector(props.containerSelectors);
      if (container) break;
      await new Promise((resolve) => setTimeout(resolve));
    }
  },
  lifecycles.bootstrap,
];

export const mount = lifecycles.mount;

export const unmount = lifecycles.unmount;

export const update = lifecycles.update;
