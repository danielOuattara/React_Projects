import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunction from "./_01_function_solution/AppFunction";
import AppClass from "./_02_class_solution/AppClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppFunction />
    <AppClass />
  </React.StrictMode>,
);
