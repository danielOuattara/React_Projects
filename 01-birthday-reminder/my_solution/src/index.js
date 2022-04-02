import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppClass from "./classes_solution/AppClass";
import AppFunction from "./functions_solution/AppFunction";
import AppFunctionContextAPI from "./contextAPI_functions_solution/AppFunctionContextAPI";
import AppClassContextAPI from './contextAPI_classes_solution/AppClassContextAPI'

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
    <hr />
    <AppFunction />
    <hr />
    <AppFunctionContextAPI />
    <hr />
    <AppClassContextAPI />

  </React.StrictMode>,
  document.getElementById("root")
);
