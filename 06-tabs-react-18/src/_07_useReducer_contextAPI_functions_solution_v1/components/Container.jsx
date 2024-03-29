import { JobAccessButton, JobDetails } from "./";
import { JobsContext } from "./../context/JobsContext";

export default function Container() {
  return (
    <JobsContext.Consumer>
      {(context) => {
        if (context.jobsState.isLoading) {
          return (
            <section className="section loading">
              <h1>Loading ...</h1>
            </section>
          );
        }

        if (context.jobsState.error) {
          return (
            <section className="section loading">
              <h1>{context.state.error}</h1>
            </section>
          );
        }

        return (
          <div>
            <section className="section">
              <div className="title">
                <p>
                  useReducer + custom hooks + context API functions solution
                  version 1
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
      }}
    </JobsContext.Consumer>
  );
}
