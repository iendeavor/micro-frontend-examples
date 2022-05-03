import { registerApplication, start } from "single-spa";
import applications from "./applications";

applications.forEach(registerApplication);

start();
