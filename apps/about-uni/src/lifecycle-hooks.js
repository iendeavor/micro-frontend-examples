import { createApp } from "vue";
import App from "./App.vue";

let instance = null;

export const mount = ({ containerSelectors }) => {
  instance = createApp(App);
  instance.mount(containerSelectors);
};

export const unmount = () => {
  instance?.unmount();
  instance = null;
};
