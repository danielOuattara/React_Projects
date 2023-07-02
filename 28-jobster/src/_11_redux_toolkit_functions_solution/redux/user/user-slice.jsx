import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  fetchingInstance,
  getUserFromLocalStorage,
} from "../../../utilities";

const initialUserState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

//-------
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userArg, thunkAPI) => {
    try {
      const response = await fetchingInstance.post("/auth/register", userArg);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

//-------
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userArg, thunkAPI) => {
    try {
      const response = await fetchingInstance.post("auth/login", userArg);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

//-------
const userSlice = createSlice({
  name: "user-slice",
  initialState: initialUserState,
  reducers: {},
  extraReducers: {
    //--------
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      // state.user = payload.user; // ??
      addUserToLocalStorage(payload.user);
      toast.success(`Welcome ${payload.user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    //--------
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      // state.user = payload.user; // ??
      console.log("payload = ", payload);
      addUserToLocalStorage(payload.user);
      toast.success(`Welcome back ${payload.user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },

  // OR

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(registerUser.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(registerUser.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.user = payload.user;
  //       toast.success(`Welcome ${payload.user.name}`);
  //     })
  //     .addCase(registerUser.rejected, (state, { payload }) => {
  //       state.isLoading = false;
  //       toast.error(payload);
  //     })
  //     //-------
  //     .addCase(loginUser.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(loginUser.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.user = payload.user;
  //       toast.success(`Welcome back ${payload.user.name}`);
  //     })
  //     .addCase(loginUser.rejected, (state, { payload }) => {
  //       state.isLoading = false;
  //       toast.error(payload);
  //     });
  // },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

// https://redux-toolkit-jobster.netlify.app/
