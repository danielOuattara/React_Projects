import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppFunctionV1 from "./_01_functions_solution_v1/AppFunctionV1";
// import AppFunctionV2 from "./_01_functions_solution_v2/AppFunctionV2";
// import AppFunctionV3 from "./_01_functions_solution_v3/AppFunctionV3";
import AppClasses from "./_02_classes_solution/AppClasses";
// import AppContextAPIFunction from "./_03_context_API_functions_solution/AppContextAPIFunction";
// import AppContextAPIClasses from "./_04_context_API_classes_solution/AppContextAPIClasses";
// import AppUseContextHookFunction from "./_05_useContext_hook_functions_solution/AppUseContextHookFunction";
// import AppUseReducerHookFunction from "./_06_useReducer_hook_functions_solution/AppUseReducerHookFunction";
// import AppUseReducerUseContextHooksFunctions from "./_07_useReducer_useContext_hooks_functions_solution/AppUseReducerUseContextHooksFunctions";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <AppFunctionV1 /> */}
    {/* <AppFunctionV2 /> */}
    {/* <AppFunctionV3 /> */}
    <AppClasses />
    {/* <AppContextAPIFunction /> */}
    {/* <AppContextAPIClasses /> */}
    {/* <AppUseContextHookFunction /> */}
    {/* <AppUseReducerHookFunction /> */}
    {/* <AppUseReducerUseContextHooksFunctions /> */}
  </React.StrictMode>,
);
