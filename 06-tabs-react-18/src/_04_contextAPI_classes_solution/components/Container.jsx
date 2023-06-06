import { JobAccessButton, JobDetails } from "./";
import { JobsContext } from "./../context/JobsContext";

export default function Container() {
  return (
    <JobsContext.Consumer>
      {(context) => {
        if (context.state.isLoading) {
          return (
            <section className="section loading">
              <h1>Loading ...</h1>
            </section>
          );
        }

        if (context.state.error) {
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
                <p>context API + class component</p>
                <h2>experiences</h2>
                <div className="underline"></div>
              </div>

              <div className="jobs-center">
                <JobAccessButton
                //   jobIndex={state.jobIndex}
                //   setState={setState}
                //   jobs={state.jobs}
                />
                <JobDetails
                // job={state.jobs[state.jobIndex]}
                />
              </div>
            </section>
          </div>
        );
      }}
    </JobsContext.Consumer>
  );
}
