import React from "react";
import ReactDOM from "react-dom/client";
import SourceCode from "./SourceCode";
import AppFunction from "./_01_functions_solution/AppFunction";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SourceCode />
    <ToastContainer position="top-center" autoClose={2000} />
    <hr />
    <AppFunction />
    <hr />
  </React.StrictMode>,
);
