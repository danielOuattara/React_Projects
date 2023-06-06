const TOGGLE_JOBS = "TOGGLE_JOBS";
const START_FETCH_JOBS = "START_FETCH_JOBS";
const HANDLE_FETCH_JOBS_ERROR = "HANDLE_FETCH_JOBS_ERROR";
const HANDLE_FETCH_JOBS_SUCCESS = "HANDLE_FETCH_JOBS_SUCCESS";
const HANDLE_ERROR = "HANDLE_ERROR";

const toggleJobs = (index) => {
  return { type: TOGGLE_JOBS, payload: { index } };
};

const startFetchJob = () => {
  return { type: START_FETCH_JOBS };
};

const handleFetchJobsError = ({ errorMessage }) => {
  return { type: HANDLE_FETCH_JOBS_ERROR, payload: errorMessage };
};

const handleFetchJobsSuccess = ({ jobsData }) => {
  return {
    type: HANDLE_FETCH_JOBS_SUCCESS,
    payload: { jobsData },
  };
};

const handleError = () => {
  return {
    type: HANDLE_ERROR,
  };
};

export {
  TOGGLE_JOBS,
  toggleJobs,
  START_FETCH_JOBS,
  startFetchJob,
  HANDLE_FETCH_JOBS_SUCCESS,
  handleFetchJobsSuccess,
  HANDLE_FETCH_JOBS_ERROR,
  handleFetchJobsError,
  HANDLE_ERROR,
  handleError,
};
