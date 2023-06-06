import { JobAccessButton, JobDetails } from "./";
import { useJobsContext } from "./../context/JobsContext";

export default function Container() {
  const { state } = useJobsContext();
  if (state.isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  if (state.error) {
    return (
      <section className="section loading">
        <h1>{state.error}</h1>
      </section>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="title">
          <p>context API + useContext hook solutions</p>
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
