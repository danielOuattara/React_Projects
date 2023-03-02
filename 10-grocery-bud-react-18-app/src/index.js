import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunction from "./_01_functions_solution/AppFunction";
import AppFunctionV2 from "./_01_functions_solution_v2/AppFunctionV2";
import AppClass from "./_02_classes_solution/AppClass";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppFunction />
    <br /> <hr /> <br />
    <AppFunctionV2 />
    <br /> <hr /> <br />
    <AppClass />
  </React.StrictMode>,
);
