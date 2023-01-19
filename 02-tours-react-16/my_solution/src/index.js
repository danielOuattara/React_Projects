import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppFunction from "./_01_functional_solution/AppFunction";
// import AppClass from './classes_solution/AppClass'
// import AppFunctionContextAPI from "./contextAPI_functions_solution/AppFunctionContextAPI";
// import AppClassContextAPI from "./contextAPI_classes_solution/AppClassContextAPI";

ReactDOM.render(
  <React.StrictMode>
    <AppFunction />
    {/* <AppClass /> */}
    {/* <AppFunctionContextAPI /> */}
    {/* <AppClassContextAPI /> */}
  </React.StrictMode>,
  document.getElementById("root"),
);
