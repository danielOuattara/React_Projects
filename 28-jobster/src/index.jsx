import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import AppFunctionReduxToolkit from "./_11_redux_toolkit_functions_solution/AppFunctionReduxToolkit";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppFunctionReduxToolkit tab="home" />
  </React.StrictMode>,
);
