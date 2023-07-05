import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs, getStats } from "./allJobsAsyncThunk";
import { toast } from "react-toastify";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialJobsState = {
  isLoadingAllJobs: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "all-jobs-slice",
  initialState: initialJobsState,
  reducers: {
    showLoadingAllJobs: (state) => {
      state.isLoadingAllJobs = true;
    },
    hideLoadingAllJobs: (state) => {
      state.isLoadingAllJobs = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //------------------------ getAllJobs
      .addCase(getAllJobs.pending, (state) => {
        state.isLoadingAllJobs = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoadingAllJobs = false;
        state.jobs = payload.jobs;
      })

      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoadingAllJobs = false;
        toast.error(payload);
      })
      //------------------------ getStats
      .addCase(getStats.pending, (state) => {
        state.isLoadingAllJobs = true;
      })
      .addCase(getStats.fulfilled, (state, { payload }) => {
        state.isLoadingAllJobs = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })

      .addCase(getStats.rejected, (state, { payload }) => {
        state.isLoadingAllJobs = false;
        toast.error(payload);
      });
  },
});

export const allJobsAction = allJobsSlice.actions;

export default allJobsSlice.reducer;
