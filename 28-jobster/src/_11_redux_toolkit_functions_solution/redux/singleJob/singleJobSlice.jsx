import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createJob, deleteJob, editJob } from "./singleJobAsyncThunk";
import { getUserFromLocalStorage } from "../../../utilities";

//----------------------------------------------------

const initialSingleJobState = {
  isLoadingSingleJob: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
  deleteJobId: "",
};

const singleJobSlice = createSlice({
  name: "jobs-slice",
  initialState: initialSingleJobState,
  reducers: {
    handleJobInputChange: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },

    clearJobInput: () => {
      return {
        ...initialSingleJobState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },

    getDeleteJobId: (state, action) => {
      state.deleteJobId = action.payload;
    },

    setEditJob: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },

  extraReducers: (builder) => {
    builder
      // ----------------------------------------- Create Job
      .addCase(createJob.pending, (state) => {
        state.isLoadingSingleJob = true;
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        state.isLoadingSingleJob = false;
        toast.success(`Job created`);
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoadingSingleJob = false;
        toast.error(payload);
      })
      // ----------------------------------------- Delete Job
      .addCase(deleteJob.pending, (state) => {
        state.isLoadingSingleJob = true;
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        state.isLoadingSingleJob = false;
        toast.success("Job deleted successfully !");
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.isLoadingSingleJob = false;
        toast.error(payload);
      })

      // ----------------------------------------- Edit Job
      .addCase(editJob.pending, (state) => {
        state.isLoadingSingleJob = true;
      })
      .addCase(editJob.fulfilled, (state, { payload }) => {
        state.isLoadingSingleJob = false;
        toast.success("Job edited successfully !");
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoadingSingleJob = false;
        toast.error(payload);
      });
  },
});

export const singleJobAction = singleJobSlice.actions;

export default singleJobSlice.reducer;
