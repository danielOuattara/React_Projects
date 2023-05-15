import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friends-slice";

const store = configureStore({
  reducer: {
    friends: friendsReducer,
  },
});

export default store;
