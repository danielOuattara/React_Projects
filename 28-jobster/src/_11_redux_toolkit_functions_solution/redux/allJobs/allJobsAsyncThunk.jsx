import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchingInstance } from "../../../utilities";
import { userActions } from "../user/userSlice";
import { handleUnauthorizedOrErrorResponse } from "../../../utilities/errorHandler";
/* New: no need to use headers for auth: 
   already done in axios instance request interceptor */

const getAllJobs = createAsyncThunk("allJobs/getJobs", async (_, thunkAPI) => {
  try {
    const { page, search, searchStatus, searchType, sort } =
      thunkAPI.getState().allJobsState;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    const response = await fetchingInstance.get(url);
    return response.data;
  } catch (error) {
    return handleUnauthorizedOrErrorResponse(error, thunkAPI);
  }
});

//---------------------------------------------------------------

const getStats = createAsyncThunk("allJobs/showStats", async (_, thunkAPI) => {
  try {
    const response = await fetchingInstance.get("/jobs/stats");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

//---------------------------------------------------------------

export { getAllJobs, getStats };
