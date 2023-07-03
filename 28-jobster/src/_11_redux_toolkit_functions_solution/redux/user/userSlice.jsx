import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../../utilities";

import { registerUser, loginUser, updateUser } from "./userAsyncThunk";

const initialUserState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

//-------
const userSlice = createSlice({
  name: "user-slice",
  initialState: initialUserState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },

  extraReducers: (builder) => {
    builder
      //------- REGISTER
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        addUserToLocalStorage(payload.user);
        toast.success(`Welcome ${payload.user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      //------- LOGIN
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        addUserToLocalStorage(payload.user);
        toast.success(`Welcome back ${payload.user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      //-------- UPDATE USER
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        addUserToLocalStorage(payload.user);
        toast.success("User Updated");
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

// https://redux-toolkit-jobster.netlify.app/
