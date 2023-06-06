import {
  TOGGLE_JOBS,
  START_FETCH_JOBS,
  HANDLE_FETCH_JOBS_SUCCESS,
  HANDLE_FETCH_JOBS_ERROR,
  HANDLE_ERROR,
} from "./jobsAction";

const initialJobsState = {
  jobs: [{}],
  isLoading: true,
  error: "",
  jobIndex: 0,
  isError: false,
};

export const jobsReducer = (state = initialJobsState, action) => {
  switch (action.type) {
    case TOGGLE_JOBS:
      return {
        ...state,
        jobIndex: action.payload.index,
      };

    case START_FETCH_JOBS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      };

    case HANDLE_FETCH_JOBS_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isError: false,
        jobs: action.payload.jobsData,
      };

    case HANDLE_FETCH_JOBS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload.errorMessage,
      };

    case HANDLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "Something went wrong. Try again later. 500",
      };
    default:
      return state;
  }
};
