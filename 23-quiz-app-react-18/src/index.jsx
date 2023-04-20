import ReactDOM from "react-dom/client";
import "./index.css";
// import AppFunction from "./_01_functions_solution/AppFunction";
// import AppClasses from "./_02_classes_solution/AppClasses";
// import AppContextAPIFunction from "./_03_context_API_functions_solution/AppContextAPIFunction";
// import AppContextAPIClasses from "./_04_context_API_classes_solution/AppContextAPIClasses";
// import AppUseContextHookFunctionV1 from "./_05_useContext_hook_functions_solution_v1/AppUseContextHookFunctionV1";
// import AppUseContextHookFunctionV2 from "./_05_useContext_hook_functions_solution_v2/AppUseContextHookFunctionV2";
// import AppUseReducerHookFunction from "./_06_useReducer_hook_functions_solution/AppUseReducerHookFunction";
import AppUseReducerUseContextHooksFunctionsV1 from "./_07_useReducer_useContext_hooks_functions_solution_v1/AppUseReducerUseContextHooksFunctionsV1";
import AppUseReducerUseContextHooksFunctionsV2 from "./_07_useReducer_useContext_hooks_functions_solution_v2/AppUseReducerUseContextHooksFunctionsV2";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <AppFunction /> */}
    {/* <AppClasses /> */}
    {/* <AppContextAPIFunction /> */}
    {/* <AppContextAPIClasses /> */}
    {/* <AppUseContextHookFunctionV1 /> */}
    {/* <AppUseContextHookFunctionV2 /> */}
    {/* <AppUseReducerHookFunction /> */}
    {/* <AppUseReducerUseContextHooksFunctionsV1 /> */}
    <AppUseReducerUseContextHooksFunctionsV2 />
  </>,
);

/* 
.restart-game {
  margin-right: auto;
  background-color: rgb(95, 5, 5);
  color: white;
}

.restart-game:hover {
  margin-right: auto;
  background-color: rgb(253, 0, 0);
}


**/
