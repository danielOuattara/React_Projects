import React from "react";
import ReactDOM from "react-dom/client";
// import AppFunction from "./_01_functions_solution/AppFunction";
// import AppFunctionV2 from "./_01_functions_solution_v2/AppFunctionV2";
// import AppClass from "./_02_classes_solution/AppClass";
// import AppClassV2 from "./_02_classes_solution_v2/AppClassV2";
// import AppFunctionV3DirectFeed from "./_01_functions_solution_V3_direct_feed/AppFunctionV3DirectFeed";
// import AppFunctionContextAPIFunction from "./_03_contextAPI_functions_solution/AppContextAPIFunction";
import AppContextAPIClasses from "./_04_contextAPI_classes_solution/AppContextAPIClasses";
// import AppUseContextHookFunction from "./_05_useContext_hook_functions_solution/AppUseContextHookFunction";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    <hr />
    <br />
    {/* <AppFunctionV2 /> */}
    <hr />
    <br />
    {/* <AppFunctionV3DirectFeed /> */}
    <hr />
    <br />
    {/* <AppClass /> */}
    <hr />
    <br />
    {/* <AppClassV2 /> */}
    <hr />
    <br />
    {/* <AppFunctionContextAPIFunction /> */}
    <hr />
    <br />
    <AppContextAPIClasses />
    <hr />
    <br />
    {/* <AppUseContextHookFunction /> */}
  </React.StrictMode>,
);
