import "./index.css";

import React from "react";
import ReactDom from "react-dom";
import RouteComponent from "./routes";

ReactDom.render(
  <React.StrictMode>
    <RouteComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
