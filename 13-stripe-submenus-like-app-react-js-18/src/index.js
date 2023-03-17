import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppFunction from "./_01_functions_solution/AppFunction";
// import AppClass from "./_02_classes_solution/AppClass";
// import AppContextAPIFunction from "./_03_context_API_functions_solution/AppContextAPIFunction";
import AppContextAPIClasses from "./_04_context_API_classes_solution/AppContextAPIClasses";
// import AppUseContextHookFunction from "./_05_useContext_hook_functions_solution/AppUseContextHookFunction";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    <br /> <hr /> <br />
    {/* <AppClass /> */}
    <br /> <hr /> <br />
    {/* <AppContextAPIFunction /> */}
    <br /> <hr /> <br />
    <AppContextAPIClasses />
    <br /> <hr /> <br />
    {/* <AppUseContextHookFunction /> */}
    <br /> <hr /> <br />
  </React.StrictMode>,
);
