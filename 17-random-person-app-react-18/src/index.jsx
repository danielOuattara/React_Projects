import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppFunction from "./_01_functions_solution/AppFunction";
import AppFunctionCustomHook from "./_01_functions_solution_customHooks/AppFunctionCustomHooks";
import AppClasses from "./_02_classes_solution/AppClasses";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    <AppFunctionCustomHook />
    <AppClasses />
  </React.StrictMode>,
);

/* 
NOTE:  using the API  "https://randomuser.me/api/"
       you cannot activate all 3 App above and make 
       requests at the same time. Maximum of 2 is allowed  
*/
