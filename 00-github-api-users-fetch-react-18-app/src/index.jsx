import React from "react";
import ReactDOM from "react-dom/client";
import AppFunction from "./_01_functions_solution/AppFunction";
import AppFunctionV2 from "./_01_functions_solution_v2/AppFunctionV2";
import AppClass from "./_02_classes_solution/AppClass";
import AppClassV2 from "./_02_classes_solution_v2/AppClassV2";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppFunction />
    <hr />
    <br />
    <AppFunctionV2 />
    <hr />
    <br />
    <AppClass />
    <hr />
    <br />
    <AppClassV2 />
  </React.StrictMode>,
);
