import { useReducer, useEffect } from "react";
import {
  toggleJobs,
  startFetchJob,
  handleFetchJobsSuccess,
  handleFetchJobsError,
  handleError,
} from "./reducer/jobsAction";
import { jobsReducer } from "./reducer/jobsReducer";
import { JobAccessButton, JobDetails } from "./components";

const url = "https://course-api.com/react-tabs-project";

const initialJobsState = {
  jobs: [{}],
  isLoading: true,
  error: "",
  jobIndex: 0,
};
export default function AppFunctionUseReducerV1() {
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

  if (jobsState.isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  if (jobsState.error) {
    return (
      <section className="section loading">
        <h1>{jobsState.error}</h1>
      </section>
    );
  }
  return (
    <div>
      <section className="section">
        <div className="title">
          <p>useReducer hooks functions solution (version 1)</p>
          <h2>experiences</h2>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <JobAccessButton
            jobIndex={jobsState.jobIndex}
            handleToggleJobs={handleToggleJobs}
            jobs={jobsState.jobs}
          />
          <JobDetails job={jobsState.jobs[jobsState.jobIndex]} />
        </div>
      </section>
    </div>
  );
}
