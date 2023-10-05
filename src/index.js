import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const root = createRoot(document.getElementById("app"));
import "./index.css";
root.render(
  <>
    <App />
  </>
);
