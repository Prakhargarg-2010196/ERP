import "./index.css";

import React from "react";
import ReactDom from "react-dom";
import RouteComponent from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
  <React.StrictMode>
    <Router>
      <RouteComponent />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
