import createRemoteApp from "../../helpers/create-remote-app";
import * as reactAppLifecycles from "react-app/dist/main.js";

async function fetchAppLifecycles() {
  // uncomment to simulate failed load
  // throw new Error("Failed to load remote-react-app from remote.");

  return reactAppLifecycles;
}

export default createRemoteApp({ fetchAppLifecycles, entry: "/nested/react" });
