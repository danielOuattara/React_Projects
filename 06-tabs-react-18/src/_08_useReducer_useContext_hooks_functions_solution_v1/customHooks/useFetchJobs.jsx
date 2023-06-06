//  CASE 2 : One Big State : OK
import { useEffect, useReducer } from "react";
import {
  toggleJobs,
  startFetchJob,
  handleFetchJobsSuccess,
  handleFetchJobsError,
  handleError,
} from "./../reducer/jobsAction";
import { jobsReducer } from "./../reducer/jobsReducer";

const url = "https://course-api.com/react-tabs-project";

const initialJobsState = {
  jobs: [{}],
  isLoading: true,
  error: "",
  jobIndex: 0,
  isError: false,
};

export default function useFetchJobs() {
  const [jobsState, dispatchJobs] = useReducer(jobsReducer, initialJobsState);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        dispatchJobs(startFetchJob());
        const res = await fetch(url);
        if (!res.ok) {
          dispatchJobs(handleFetchJobsError());
          throw Error(`${res.status} ${res.statusText}`);
        }
        const jobsData = await res.json();
        dispatchJobs(handleFetchJobsSuccess({ jobsData }));
      } catch (error) {
        dispatchJobs(handleError());
        return error;
      }
    };

    fetchJob();
  }, []);

  const handleToggleJobs = (indexArg) => {
    dispatchJobs(toggleJobs(indexArg));
  };

  return { jobsState, handleToggleJobs };
}
