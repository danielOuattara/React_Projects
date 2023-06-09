import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SourceCode from "./SourceCode";
// import AppFunction from "./_01_functions_solution/AppFunction";
// import AppClass from "./_02_classes_solution/AppClass";
// import AppFunctionContextAPI from "./_03_contextAPI_functions_solution/AppFunctionContextAPI";
// import AppClassContextAPI from "./_04_contextAPI_classes_solution/AppClassContextAPI";
import AppFunctionContextAPIUseContextHook from "./_05_contextAPI_useContext_hook_functions_solution/AppFunctionContextAPIUseContextHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SourceCode />
    <hr />
    {/* <AppFunction /> */}
    <hr />
    {/* <AppClass /> */}
    <hr />
    {/* <AppFunctionContextAPI /> */}
    <hr />
    {/* <AppClassContextAPI /> */}
    <hr />
    <AppFunctionContextAPIUseContextHook />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
  </React.StrictMode>,
);
