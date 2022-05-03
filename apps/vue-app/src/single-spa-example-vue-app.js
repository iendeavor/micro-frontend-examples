import "systemjs-webpack-interop/auto-public-path";

import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import createRouterInstance from "./router";

import { foo } from "foo";
foo();

const lifecycles = singleSpaVue({
  createApp,
  appOptions: async (props) => {
    return {
      el: props.containerSelectors,
      render() {
        return h(App);
      },
    };
  },
  handleInstance: (app, props) => {
    const router = createRouterInstance({ basename: props.basename });
    app.use(router);
  },
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
