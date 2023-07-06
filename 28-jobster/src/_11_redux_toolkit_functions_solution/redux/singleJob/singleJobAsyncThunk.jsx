import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchingInstance } from "../../../utilities";
import { userActions } from "./../user/userSlice";
import { singleJobAction } from "./singleJobSlice";
import { allJobsAction } from "../allJobs/allJobsSlice";
import { getAllJobs } from "../allJobs/allJobsAsyncThunk";
import { modalActions } from "../modal/modalSlice";
import { handleUnauthorizedOrErrorResponse } from "../../../utilities/errorHandler";

/* new no need to use headers for auth: 
   already done in axios instance request interceptor */

const createJob = createAsyncThunk(
  "singleJob/addJob",
  async (jobData, thunkAPI) => {
    try {
      const response = await fetchingInstance.post("/jobs", jobData);
      thunkAPI.dispatch(singleJobAction.clearJobInput());
      return response.data;
    } catch (error) {
      return handleUnauthorizedOrErrorResponse(error, thunkAPI);
    }
  },
);

//---------------------------------------------------------------

const deleteJob = createAsyncThunk(
  "singleJob/deleteJob",
  async (jobId, thunkAPI) => {
    try {
      thunkAPI.dispatch(allJobsAction.showLoadingAllJobs());
      const response = await fetchingInstance.delete(`/jobs/${jobId}`);
      thunkAPI.dispatch(modalActions.hideModal());
      thunkAPI.dispatch(getAllJobs());
      return response.data;
    } catch (error) {
      return handleUnauthorizedOrErrorResponse(error, thunkAPI);
    }
  },
);

//---------------------------------------------------------------

const editJob = createAsyncThunk(
  "singleJob/editJob",
  async ({ jobId, job }, thunkAPI) => {
    try {
      const response = await fetchingInstance.patch(`/jobs/${jobId}`, job);
      thunkAPI.dispatch(singleJobAction.clearJobInput());
      return response.data;
    } catch (error) {
      return handleUnauthorizedOrErrorResponse(error, thunkAPI);
    }
  },
);

//---------------------------------------------------------------

export { createJob, deleteJob, editJob };
