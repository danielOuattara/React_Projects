import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createJob } from "./singleJobAsyncThunk";
import { getUserFromLocalStorage } from "../../../utilities";

//----------------------------------------------------

const initialSingleJobState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(`Job created`);
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const singleJobAction = singleJobSlice.actions;

export default singleJobSlice.reducer;
