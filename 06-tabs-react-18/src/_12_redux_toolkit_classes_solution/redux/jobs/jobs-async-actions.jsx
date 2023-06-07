import { jobsActions } from "./jobs-slice";
const url = "https://course-api.com/react-tabs-project";

export const fetchJobs = () => {
  return async function (dispatch) {
    try {
      dispatch(jobsActions.startFetchJobs());
      const res = await fetch(url);
      if (!res.ok) {
        const errorMessage = `${res.status} ${res.statusText}`;
        dispatch(jobsActions.handleFetchJobsError({ errorMessage }));
        throw Error(errorMessage);
      }
      const jobsData = await res.json();
      dispatch(jobsActions.handleFetchJobsSuccess({ jobsData }));
    } catch (error) {
      dispatch(jobsActions.handleError());
      return error;
    }
  };
};
