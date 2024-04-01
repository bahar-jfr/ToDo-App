import "./src/style/index.css";
import { App } from "./src/pages/app.js";
import { Modal, Overlay, viewModal } from "./src/components/modal/index.js";
import { Filter } from "./src/components/filter/index.js";

const root = document.getElementById("app");
root.append(App(), Modal(), Overlay(), Filter(), viewModal());
