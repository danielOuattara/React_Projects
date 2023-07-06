import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchingInstance } from "../../../utilities";
import { userActions } from "../user/userSlice";

/* New: no need to use headers for auth: 
   already done in axios instance request interceptor */

const getAllJobs = createAsyncThunk("allJobs/getJobs", async (_, thunkAPI) => {
  try {
    const response = await fetchingInstance.get("/jobs");
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(userActions.logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    toast.error(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

//---------------------------------------------------------------

const getStats = createAsyncThunk("allJobs/showStats", async (_, thunkAPI) => {
  try {
    const response = await fetchingInstance.get("/jobs/stats");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

//---------------------------------------------------------------

export { getAllJobs, getStats };
