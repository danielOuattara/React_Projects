import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunction from "./_01_functions_solution/AppFunction";
import AppClasses from "./_02_classes_solution/AppClasses";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppFunction />
    <AppClasses />
  </React.StrictMode>,
);
