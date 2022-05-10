import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MovieContextProvider } from "./context/MovieContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
