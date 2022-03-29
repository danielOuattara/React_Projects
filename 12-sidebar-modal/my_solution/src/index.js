import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./functions_solution/App";
import { AppProvider } from "./functions_solution/context";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
