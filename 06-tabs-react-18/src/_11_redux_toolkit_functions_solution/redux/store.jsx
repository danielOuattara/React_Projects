import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobs/jobs-slice";

export default configureStore({
  reducer: {
    jobsState: jobsReducer,
  },
});
