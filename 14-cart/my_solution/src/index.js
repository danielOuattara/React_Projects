import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppFunction from './functions_solution/AppFunction';
import { AppProvider } from './functions_solution/context';
// import AppClass from "./classes_solution/AppClass";
// import { Provider } from "react-redux";
// import store from "./classes_solution/store";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppFunction />
    </AppProvider>
    {/* <Provider>
      <AppClass store={store} />  // TOEND : rewatch Academind & CodeEvolution video course on Redux to complete this part. Started. Few things missing
    </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
