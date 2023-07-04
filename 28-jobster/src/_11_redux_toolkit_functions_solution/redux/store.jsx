import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import uiReducer from "./ui/uiSlice";
import singleJobReducer from "./singleJob/singleJobSlice";
import allJobsReducer from "./allJobs/allJobsSlice";
import modalReducer from "./modal/modalSlice";

export default configureStore({
  reducer: {
    userState: userReducer,
    uiState: uiReducer,
    singleJobState: singleJobReducer,
    allJobsState: allJobsReducer,
    modalState: modalReducer,
  },
});
