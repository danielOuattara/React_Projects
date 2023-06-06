const url = "https://course-api.com/react-tabs-project";

const TOGGLE_JOBS = "TOGGLE_JOBS";
const START_FETCH_JOBS = "START_FETCH_JOBS";
const HANDLE_FETCH_JOBS_ERROR = "HANDLE_FETCH_JOBS_ERROR";
const HANDLE_FETCH_JOBS_SUCCESS = "HANDLE_FETCH_JOBS_SUCCESS";
const HANDLE_ERROR = "HANDLE_ERROR";

const toggleJobs = (index) => {
  return { type: TOGGLE_JOBS, payload: { index } };
};

const startFetchJobs = () => {
  return { type: START_FETCH_JOBS };
};

const handleFetchJobsError = ({ errorMessage }) => {
  return { type: HANDLE_FETCH_JOBS_ERROR, payload: errorMessage };
};

const handleFetchJobsSuccess = (jobsData) => {
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

const fetchJobs = () => {
  return async function (dispatch) {
    try {
      dispatch(startFetchJobs());
      const res = await fetch(url);
      if (!res.ok) {
        dispatch(handleFetchJobsError());
        throw Error(`${res.status} ${res.statusText}`);
      }
      const jobsData = await res.json();
      dispatch(handleFetchJobsSuccess(jobsData));
    } catch (error) {
      dispatch(handleError());
      return error;
    }
  };
};

export {
  TOGGLE_JOBS,
  toggleJobs,
  START_FETCH_JOBS,
  HANDLE_FETCH_JOBS_SUCCESS,
  HANDLE_FETCH_JOBS_ERROR,
  HANDLE_ERROR,
  fetchJobs,
};
