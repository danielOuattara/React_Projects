import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppFunction from "./functions_solution/AppFunction";
// import AppClass from './classes_solution/AppClass';

ReactDOM.render(
  <React.StrictMode>
    <AppFunction />
    {/* <AppClass /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
