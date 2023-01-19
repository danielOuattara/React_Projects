import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppFunction from "./_01_functions_solution/AppFunction";
import AppClass from "./_02_classes_solution/AppClass";
import AppFunctionContextAPI from "./_03_functions_ContextAPI-useReducer_solution/AppFunctionContextAPI";
import AppClassContextAPI from "./_04_contextAPI_classes_solution/AppClassContextAPI";
import AppFunctionContextAPIUseReducer from "./_05_contextAPI_useReducer_functions_solution/AppFunctionContextAPIUseReducer";
import AppClassRedux from "./_06_classes_redux_solution/AppClassRedux";

ReactDOM.render(
  <React.StrictMode>
    <AppFunction />
    <hr />
    <AppClass />
    <hr />
    <AppFunctionContextAPI />
    <hr />
    <AppClassContextAPI />
    <hr />
    <AppFunctionContextAPIUseReducer />
    <hr />
    <AppClassRedux />
  </React.StrictMode>,
  document.getElementById("root"),
);
