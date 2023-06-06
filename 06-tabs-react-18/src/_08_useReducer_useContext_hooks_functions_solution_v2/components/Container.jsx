import { JobAccessButton, JobDetails } from "./";
import { useJobsContext } from "./../context/JobsContext";

export default function Container() {
  const { jobsState } = useJobsContext();

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
          <p>
            useReducer + custom hooks + useContext functions solution version 2
          </p>
          <h2>experiences</h2>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <JobAccessButton />
          <JobDetails />
        </div>
      </section>
    </div>
  );
}
