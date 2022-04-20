import { createApp } from "vue";
import App from "./App";
import createRouterInstance from "./router";

let instance = null;

export const mount = ({ container, entry }) => {
  instance = createApp(App);
  const router = createRouterInstance({ entry });
  instance.use(router);
  instance.mount(container);
};

export const unmount = ({ container }) => {
  instance?.unmount();
  instance = null;
};
