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
        <App />
    </AppProvider>
        <hr />
      <ToggleClassContextProvider>
        <AppClass />
      </ToggleClassContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
