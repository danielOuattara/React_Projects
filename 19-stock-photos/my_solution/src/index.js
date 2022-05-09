import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PhotoContextProvider from "./context/PhotoContext";

ReactDOM.render(
  <React.StrictMode>
    <PhotoContextProvider>
      <App />
    </PhotoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
