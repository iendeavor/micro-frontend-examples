import { createApp, h } from "vue";
import Adapter from "./Adapter.g.vue";

let instance = null;

export const mount = ({ containerSelectors, observableRootProps }) => {
  instance = createApp(h(Adapter, { observableRootProps }));
  instance.mount(containerSelectors);
};

export const unmount = () => {
  instance?.unmount();
  instance = null;
};
