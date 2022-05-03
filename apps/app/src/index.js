import { registerMicroApps, start } from "qiankun";
import applications from "./applications";

registerMicroApps(applications);

start();
