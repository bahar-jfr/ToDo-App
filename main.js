import "./src/style/index.css";
import { App } from "./src/app.js";
import { Modal, Overlay } from "./src/components/modal/index.js";

const root = document.getElementById("app");
root.append(App(), Modal(), Overlay());
