import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import uiReducer from "./ui/uiSlice";
import singleJobReducer from "./singleJob/singleJobSlice";

export default configureStore({
  reducer: {
    userState: userReducer,
    uiState: uiReducer,
    singleJobState: singleJobReducer,
  },
});
