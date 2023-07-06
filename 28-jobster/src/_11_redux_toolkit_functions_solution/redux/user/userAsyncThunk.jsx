import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchingInstance } from "../../../utilities";
import { userActions } from "./userSlice";
import { uiActions } from "../ui/uiSlice";
import { singleJobAction } from "../singleJob/singleJobSlice";
import { allJobsAction } from "../allJobs/allJobsSlice";
import { handleUnauthorizedOrErrorResponse } from "../../../utilities/errorHandler";
//---------------------------------------------------------------

/* NEW: no need to use headers for auth: 
   already done in axios instance request interceptor 
------------------------------------------------------*/

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

//---------------------------------------------------------------

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
      return handleUnauthorizedOrErrorResponse(error, thunkAPI);
    }
  },
);

//---------------------------------------------------------------

const logoutAndClearReduxState = createAsyncThunk(
  "user/clearReduxState",
  (value, thunkAPI) => {
    try {
      thunkAPI.dispatch(singleJobAction.clearJobInput());
      thunkAPI.dispatch(uiActions.resetUIStateUponLogout());
      thunkAPI.dispatch(allJobsAction.clearAllJobsStateUponLogout());
      thunkAPI.dispatch(userActions.logoutUser());
      if (value !== 401) {
        toast.success("Logout successfully !");
      }
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  },
);

//---------------------------------------------------------------

export { registerUser, loginUser, updateUser, logoutAndClearReduxState };
