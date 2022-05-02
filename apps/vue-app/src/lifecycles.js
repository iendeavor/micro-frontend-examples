import { createApp } from "vue";
import App from "./App.vue";
import createRouterInstance from "./router";

import { foo } from "foo";
foo();

let instance = null;

export const mount = ({ containerSelectors, basename }) => {
  instance = createApp(App);
  const router = createRouterInstance({ basename });
  instance.use(router);
  instance.mount(containerSelectors);
};

export const unmount = () => {
  instance?.unmount();
  instance = null;
};
