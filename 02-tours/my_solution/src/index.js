import React from "react";
import ReactDOM from "react-dom";
import AppFunctionContextAPI from "./contextAPI_functions_solution/AppFunctionContextAPI";
import "./index.css";
// import AppFunction from './function_solution/AppFunction';
// import AppClass from './classes_solution/AppClass'

ReactDOM.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    {/* <AppClass /> */}
    <AppFunctionContextAPI />
  </React.StrictMode>,
  document.getElementById("root")
);
