import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppFunction from "./_01_function_solution/AppFunction";
// import AppClass from "./_02_classes_solution/AppClass";
import AppFunctionContextAPI from "./_03_contextAPI_functions_solution/AppFunctionContextAPI";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    {/* <AppClass /> */}
    <AppFunctionContextAPI />
  </React.StrictMode>,
);
