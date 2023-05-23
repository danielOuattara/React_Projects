import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunction from "./_01_functions_solution/AppFunction";
import AppClass from "./_02_classes_solution/AppClass";
import AppFunctionContextAPI from "./_03_contextAPI_functions_solution/AppFunctionContextAPI";
import AppClassContextAPI from "./_04_contextAPI_classes_solution/AppClassContextAPI";
import AppFunctionContextAPIUseContextHook from "./_05_contextAPI_useContext_hook_functions_solution/AppFunctionContextAPIUseContextHook";
import AppFunctionUseReducerV1 from "./_06_useReducer_hook_functions_solution_v1/AppFunctionUseReducerV1";
import AppFunctionUseReducerV2 from "./_06_useReducer_hook_functions_solution_v2/AppFunctionUseReducerV2";
import AppFunctionUseReducerUseContextV1 from "./_08_useReducer_useContext_hooks_functions_solution_v1/AppFunctionUseReducerUseContextV1";
import AppFunctionUseReducerUseContextV2 from "./_08_useReducer_useContext_hooks_functions_solution_v2/AppFunctionUseReducerUseContextV2";
import AppFunctionUseReducerUseContextV3 from "./_08_useReducer_useContext_hooks_functions_solution_v3/AppFunctionUseReducerUseContextV3";
import AppFunctionReduxV1 from "./_09_react_redux_functions_solution_v1/AppFunctionReduxV1";
import AppFunctionReduxV2 from "./_09_react_redux_functions_solution_v2/AppFunctionReduxV2";
import AppClassReduxV1 from "./_10_react_redux_classes_solution_v1/AppClassReduxV1";
import AppClassReduxV2 from "./_10_react_redux_classes_solution_v2/AppClassReduxV2";
import AppFunctionReduxToolkit from "./_11_redux_toolkit_functions_solution/AppFunctionReduxToolkit";
import AppClassReduxToolkit from "./_12_redux_toolkit_classes_solution/AppClassReduxToolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppFunction />
    <hr />
    <AppClass />
    <hr />
    <AppFunctionContextAPI />
    <hr />
    <AppClassContextAPI />
    <hr />
    <AppFunctionContextAPIUseContextHook />
    <hr />
    <AppFunctionUseReducerV1 />
    <hr />
    <AppFunctionUseReducerV2 />
    <hr />
    <AppFunctionUseReducerUseContextV1 />
    <hr />
    <AppFunctionUseReducerUseContextV2 />
    <hr />
    <AppFunctionUseReducerUseContextV3 />
    <hr />
    <AppFunctionReduxV1 />
    <hr />
    <AppFunctionReduxV2 />
    <hr />
    <AppClassReduxV1 />
    <hr />
    <AppClassReduxV2 />
    <hr />
    <AppFunctionReduxToolkit />
    <hr />
    <AppClassReduxToolkit />
    <hr />
  </React.StrictMode>,
);
