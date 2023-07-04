import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchingInstance } from "../../../utilities";
import { userActions } from "./../user/userSlice";
import { singleJobAction } from "./singleJobSlice";
import { allJobsAction } from "../allJobs/allJobsSlice";
import { getAllJobs } from "../allJobs/allJobsAsyncThunk";
import { modalActions } from "../modal/modalSlice";

const createJob = createAsyncThunk(
  "singleJob/addJob",
  async (jobData, thunkAPI) => {
    try {
      const response = await fetchingInstance.post("/jobs", jobData, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
        },
      });
      thunkAPI.dispatch(singleJobAction.clearJobInput());
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

const deleteJob = createAsyncThunk(
  "singleJob/deleteJob",
  async (jobId, thunkAPI) => {
    try {
      thunkAPI.dispatch(allJobsAction.showLoadingAllJobs());
      const response = await fetchingInstance.delete(`/jobs/${jobId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
        },
      });
      thunkAPI.dispatch(modalActions.hideModal());
      thunkAPI.dispatch(getAllJobs());
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(allJobsAction.hideLoadingAllJobs());
      if (error.response.status === 401) {
        thunkAPI.dispatch(userActions.logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }
      toast.error(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

export { createJob, deleteJob };
