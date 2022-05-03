import "./public-path";
import { createApp, h } from "vue";

import App from "./App.vue";
import createRouterInstance from "./router";

// import { foo } from "foo";
// foo();

export const bootstrap = async (props) => {};

let app = null;
let router = null;

export const mount = async (props) => {
  app = createApp({
    render() {
      return h(App);
    },
  });
  router = createRouterInstance({ basename: props.basename });
  app.use(router);
  app.mount(props.container.querySelector("#app"));
};

export const unmount = async (props) => {
  app.unmount();
  app = null;
  router = null;
};

export const update = (props) => {};
