import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SourceCode from "./SourceCode";
import AppFunctionV1 from "./_01_functions_solution_v1/AppFunctionV1";
import AppFunctionV2 from "./_01_functions_solution_v2/AppFunctionV2";
import AppFunctionV3 from "./_01_functions_solution_v3/AppFunctionV3";
import AppFunctionV4 from "./_01_functions_solution_v4/AppFunctionV4";
import AppClassV1 from "./_02_classes_solution_v1/AppClassV1";
import AppClassV2 from "./_02_classes_solution_v2/AppClassV2";
import AppClassV3 from "./_02_classes_solution_v3/AppClassV3";
import AppFunctionContextAPIV1 from "./_03_contextAPI_functions_solution_v1/AppFunctionContextAPIV1";
import AppFunctionContextAPIV2 from "./_03_contextAPI_functions_solution_v2/AppFunctionContextAPIV2";
import AppFunctionContextAPIV3 from "./_03_contextAPI_functions_solution_v3/AppFunctionContextAPIV3";
import AppFunctionContextAPIV4 from "./_03_contextAPI_functions_solution_v4/AppFunctionContextAPIV4";
import AppClassContextAPI from "./_04_contextAPI_classes_solutions/AppClassContextAPI";
import AppFunctionContextAPIUseContextHookV1 from "./_05_contextAPI_useContext_hook_functions_solution_v1/AppFunctionContextAPIUseContextHookV1";
import AppFunctionContextAPIUseContextHookV2 from "./_05_contextAPI_useContext_hook_functions_solution_v2/AppFunctionContextAPIUseContextHookV2";
import AppFunctionContextAPIUseContextHookV3 from "./_05_contextAPI_useContext_hook_functions_solution_v3/AppFunctionContextAPIUseContextHookV3";
import AppFunctionContextAPIUseContextHookV4 from "./_05_contextAPI_useContext_hook_functions_solution_v4/AppFunctionContextAPIUseContextHookV4";
import AppFunctionUseReducer from "./_06_useReducer_hook_functions_solution/AppFunctionUseReducer";
import AppFunctionUseReducerContextAPI from "./_07_useReducer_contextAPI_functions_solution/AppFunctionUseReducerContextAPI";
import AppFunctionUseReducerUseContext from "./_08_useReducer_useContext_hooks_functions_solution/AppFunctionUseReducerUseContext";
import AppFunctionRedux from "./_09_react_redux_functions_solution/AppFunctionRedux";
import AppClassRedux from "./_10_react_redux_classes_solution/AppClassRedux";
import AppFunctionReduxToolkit from "./_11_redux_toolkit_functions_solution/AppFunctionReduxToolkit";
import AppClassReduxToolkit from "./_12_redux_toolkit_classes_solution/AppClassReduxToolkit";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SourceCode />
    <hr />
    <AppFunctionV1 />
    <hr />
    <AppFunctionV2 />
    <hr />
    <AppFunctionV3 />
    <hr />
    <AppFunctionV4 />
    <hr />
    <AppClassV1 />
    <hr />
    <AppClassV2 />
    <hr />
    <AppClassV3 />
    <hr />
    <AppFunctionContextAPIV1 />
    <hr />
    <AppFunctionContextAPIV2 />
    <hr />
    <AppFunctionContextAPIV3 />
    <hr />
    <AppFunctionContextAPIV4 />
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
    <AppFunctionUseReducer />
    <hr />
    <AppFunctionUseReducerContextAPI />
    <hr />
    <AppFunctionUseReducerUseContext />
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
