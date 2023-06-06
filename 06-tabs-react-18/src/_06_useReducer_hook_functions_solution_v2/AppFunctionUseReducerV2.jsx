import { JobAccessButton, JobDetails } from "./components";
import useFetchJobs from "./customHooks/useFetchJobs";

export default function AppFunctionUseReducerV2() {
  const { jobsState, handleToggleJobs } = useFetchJobs();

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
          <p>useReducer hooks functions solution (version 2)</p>
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
