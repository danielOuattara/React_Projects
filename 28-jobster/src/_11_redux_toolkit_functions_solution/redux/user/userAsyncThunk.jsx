import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchingInstance } from "../../../utilities";
import { userActions } from "./userSlice";

//---------------------------------------------------------------

const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await fetchingInstance.post("/auth/register", userData);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

//---------------------------------------------------------------
const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await fetchingInstance.post("auth/login", userData);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

// OR
/* new no need to use headers for auth: 
   already done in axios instance request interceptor */

const updateUser = createAsyncThunk(
  "user/patchUser",
  async (userData, thunkAPI) => {
    try {
      const response = await fetchingInstance.patch(
        "auth/updateUser",
        userData,
      );
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(userActions.logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }
      toast.error(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

//---------------------------------------------------------------

export { registerUser, loginUser, updateUser };
