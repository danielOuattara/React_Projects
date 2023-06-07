import { createSlice } from "@reduxjs/toolkit";

const initialJobsState = {
  jobs: [],
  isLoading: true,
  error: "",
  jobIndex: 0,
  isError: false,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialJobsState,
  reducers: {
    toggleJobs(state, action) {
      state.jobIndex = action.payload.index;
    },
    startFetchJobs(state) {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    },

    handleFetchJobsSuccess(state, action) {
      return {
        ...state,
        error: "",
        isLoading: false,
        isError: false,
        jobs: action.payload.jobsData,
      };
    },

    handleFetchJobsError(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.error = action.payload.errorMessage;
    },
    handleError(state) {
      state.isLoading = false;
      state.error = "Something went wrong. Try again later. 500";
    },
  },
});

export const jobsActions = jobsSlice.actions;

export default jobsSlice.reducer;
