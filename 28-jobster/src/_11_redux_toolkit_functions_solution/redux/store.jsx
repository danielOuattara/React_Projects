import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import uiReducer from "./ui/uiSlice";
export default configureStore({
  reducer: {
    userState: userReducer,
    uiState: uiReducer,
  },
});
