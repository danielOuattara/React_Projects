import { createStore, combineReducers, applyMiddleware } from "redux";
import { jobsReducer } from "./jobs/jobsReducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    jobsState: jobsReducer,
  }),
  {},
  applyMiddleware(thunk),
);
