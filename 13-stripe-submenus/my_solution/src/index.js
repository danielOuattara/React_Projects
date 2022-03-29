import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppFunction from "./functions_solution/AppFunction";
import AppContextProviderFunction from "./functions_solution/ContextFunction";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProviderFunction>
      <AppFunction />
    </AppContextProviderFunction>
  </React.StrictMode>,
  document.getElementById("root")
);
