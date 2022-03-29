import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./functions_solution/App";
import AppClass from "./classes_solution/AppClass";
import { AppProvider } from "./functions_solution/context";
import { ToggleClassContextProvider } from "./classes_solution/contextClass";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ToggleClassContextProvider>
        <App />
        <hr />
        <AppClass />
      </ToggleClassContextProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
