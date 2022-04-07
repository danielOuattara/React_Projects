import React from "react";
import ReactDOM from "react-dom";
import AppClassContextAPI from "./contextAPI_classes_solution/AppClassContextAPI";
import "./index.css";
// import AppFunctionContextAPI from "./contextAPI_functions_solution/AppFunctionContextAPI";
// import AppFunction from './function_solution/AppFunction';
// import AppClass from './classes_solution/AppClass'


ReactDOM.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    {/* <AppClass /> */}
    {/* <AppFunctionContextAPI /> */}
    <AppClassContextAPI />
  </React.StrictMode>,
  document.getElementById("root")
);
