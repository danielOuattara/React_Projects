import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppFunctionV1 from "./_01_function_solution_v1/AppFunctionV1";
// import AppFunctionV2 from "./_01_function_solution_v2/AppFunctionV2";
// import AppClass from "./_02_classes_solution/AppClass";
// import AppFunctionContextAPIV1 from "./_03_contextAPI_functions_solution_v1/AppFunctionContextAPIV1";
// import AppFunctionContextAPIV2 from "./_03_contextAPI_functions_solution_v2/AppFunctionContextAPIV2";
// import AppClassContextAPI from "./_04_contextAPI_classes_solution/AppClassContextAPI";
// import AppFunctionContextAPIUseContextHook from "./_05_contextAPI_useContext_hook_functions_solution/AppFunctionContextAPIUseContextHook";
// import AppFunctionUseReducerV1 from "./_06_useReducer_hook_functions_solution_v1/AppFunctionUseReducerV1";
// import AppFunctionUseReducerV2 from "./_06_useReducer_hook_functions_solution_v2/AppFunctionUseReducerV2";
// import AppFunctionUseReducerContextAPI from "./_07_useReducer_contextAPI_functions_solution /AppFunctionUseReducerContextAPI";
import AppFunctionUseReducerUseContext from "./_08_useReducer_useContext_hooks_functions_solution/AppFunctionUseReducerUseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppFunctionV1 /> */}
    <hr />
    {/* <AppFunctionV2 /> */}
    <hr />
    {/* <AppClass /> */}
    <hr />
    {/* <AppFunctionContextAPIV1 /> */}
    <hr />
    {/* <AppFunctionContextAPIV2 /> */}
    <hr />
    {/* <AppClassContextAPI /> */}
    <hr />
    {/* <AppFunctionContextAPIUseContextHook /> */}
    <hr />
    {/* <AppFunctionUseReducerV1 /> */}
    <hr />
    {/* <AppFunctionUseReducerV2 /> */}
    <hr />
    {/* <AppFunctionUseReducerContextAPI /> */}
    <hr />
    <AppFunctionUseReducerUseContext />
    <hr />
    <hr />
    <hr />
  </React.StrictMode>,
);
