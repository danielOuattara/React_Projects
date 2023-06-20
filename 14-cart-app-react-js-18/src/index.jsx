import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunctionV1 from "./_01_functions_solution_v1/AppFunctionV1";
import AppFunctionV2 from "./_01_functions_solution_v2/AppFunctionV2";
import AppFunctionV3 from "./_01_functions_solution_v3/AppFunctionV3";
import AppFunctionV4 from "./_01_functions_solution_v4/AppFunctionV4";

import AppClasses from "./_02_classes_solution/AppClasses";

import AppContextAPIFunctionV1 from "./_03_contextAPI_functions_solution_v1/AppContextAPIFunctionV1";
import AppContextAPIFunctionV2 from "./_03_contextAPI_functions_solution_v2/AppContextAPIFunctionV2";
import AppContextAPIFunctionV3 from "./_03_contextAPI_functions_solution_v3/AppContextAPIFunctionV3";
import AppContextAPIFunctionV4 from "./_03_contextAPI_functions_solution_v4/AppContextAPIFunctionV4";

import AppClassContextAPI from "./_04_contextAPI_classes_solution/AppClassContextAPI";

import AppFunctionContextAPIUseContextHookV1 from "./_05_contextAPI_useContext_hook_functions_solution_v1/AppFunctionContextAPIUseContextHookV1";
import AppFunctionContextAPIUseContextHookV2 from "./_05_contextAPI_useContext_hook_functions_solution_v2/AppFunctionContextAPIUseContextHookV2";
import AppFunctionContextAPIUseContextHookV3 from "./_05_contextAPI_useContext_hook_functions_solution_v3/AppFunctionContextAPIUseContextHookV3";
import AppFunctionContextAPIUseContextHookV4 from "./_05_contextAPI_useContext_hook_functions_solution_v4/AppFunctionContextAPIUseContextHookV4";

import AppFunctionUseReducerV1 from "./_06_useReducer_hook_functions_solution_v1/AppFunctionUseReducerV1";
import AppFunctionUseReducerV2 from "./_06_useReducer_hook_functions_solution_v2/AppFunctionUseReducerV2";

import AppFunctionUseReducerContextAPIV1 from "./_07_useReducer_contextAPI_functions_solution_v1/AppFunctionUseReducerContextAPIV1";
import AppFunctionUseReducerContextAPIV2 from "./_07_useReducer_contextAPI_functions_solution_v2/AppFunctionUseReducerContextAPIV2";

import AppFunctionUseReducerUseContextV1 from "./_08_useReducer_useContext_hooks_functions_solution_v1/AppFunctionUseReducerUseContextV1";
import AppFunctionUseReducerUseContextV2 from "./_08_useReducer_useContext_hooks_functions_solution_v2/AppFunctionUseReducerUseContextV2";

import AppFunctionRedux from "./_09_react_redux_functions_solution/AppFunctionRedux";
import AppClassRedux from "./_10_react_redux_classes_solution/AppClassesRedux";
import AppFunctionReduxToolkit from "./_11_redux_toolkit_functions_solution/AppFunctionReduxToolkit";
import AppClassesReduxToolkit from "./_12_redux_toolkit_classes_solution/AppClassesReduxToolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <hr />
    <AppFunctionV1 />
    <hr />
    <AppFunctionV2 />
    <hr />
    <AppFunctionV3 />
    <hr />
    <AppFunctionV4 />
    <hr />
    <AppClasses />
    <hr />
    <AppContextAPIFunctionV1 />
    <hr />
    <AppContextAPIFunctionV2 />
    <hr />
    <AppContextAPIFunctionV3 />
    <hr />
    <AppContextAPIFunctionV4 />
    <hr />
    <AppClassContextAPI />
    <hr />
    <AppFunctionContextAPIUseContextHookV1 />
    <hr />
    <AppFunctionContextAPIUseContextHookV2 />
    <hr />
    <AppFunctionContextAPIUseContextHookV3 />
    <hr />
    <AppFunctionContextAPIUseContextHookV4 />
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
    <AppClassesReduxToolkit />

    <hr />
  </React.StrictMode>,
);
