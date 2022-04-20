import createRemoteApp from "../helpers/create-remote-app";
import * as vueAppLifecycles from "vue-app/dist/main.js";

async function fetchAppLifecycles() {
  // uncomment to simulate failed load
  // throw new Error("Failed to load remote-vue-app from remote.");

  return vueAppLifecycles;
}

export default createRemoteApp({ fetchAppLifecycles, entry: "/vue" });
