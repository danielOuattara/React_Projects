import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import AppFunctionReduxToolkit from "./_11_redux_toolkit_functions_solution/AppFunctionReduxToolkit";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ToastContainer position="top-center" autoClose={1500} />
    <AppFunctionReduxToolkit tab="home" />
  </React.StrictMode>,
);
