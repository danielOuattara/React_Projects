import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppFunction from "./functions_solution/AppFunction";
// import AppClass from "./classes_solution/AppClass";
import AppContextProviderFunction from "./functions_solution/ContextFunction";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProviderFunction>
      <AppFunction />
    </AppContextProviderFunction>
    {/* <AppClass /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
