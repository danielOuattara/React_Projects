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
import AppFunctionUseReducerContextAPIV1 from "./_07_useReducer_contextAPI_functions_solution_v1/AppFunctionUseReducerContextAPIV1";
import AppFunctionUseReducerContextAPIV2 from "./_07_useReducer_contextAPI_functions_solution_v2/AppFunctionUseReducerContextAPIV2";
import AppFunctionUseReducerUseContextV1 from "./_08_useReducer_useContext_hooks_functions_solution_v1/AppFunctionUseReducerUseContextV1";
import AppFunctionUseReducerUseContextV2 from "./_08_useReducer_useContext_hooks_functions_solution_v2/AppFunctionUseReducerUseContextV2";
import AppFunctionRedux from "./_09_react_redux_functions_solution/AppFunctionRedux";
import AppClassRedux from "./_10_react_redux_classes_solution/AppClassRedux";
import AppFunctionReduxToolkit from "./_11_redux_toolkit_functions_solution/AppFunctionReduxToolkit";
import AppClassReduxToolkit from "./_12_redux_toolkit_classes_solution/AppClassReduxToolkit";

import SourceCode from "./SourceCode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SourceCode />
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
    <AppFunctionUseReducerContextAPIV1 />
    <hr />
    <AppFunctionUseReducerContextAPIV2 />
    <hr />
    <AppFunctionUseReducerUseContextV1 />
    <hr />
    <AppFunctionUseReducerUseContextV2 />
    <hr />
    <AppFunctionRedux />
    <hr />
    <AppClassRedux />
    <hr />
    <AppFunctionReduxToolkit />
    <hr />
    <AppClassReduxToolkit />
    <hr />
  </React.StrictMode>,
);
