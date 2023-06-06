import { JobsContext } from "./../context/JobsContext";
import { Component } from "react";

export default class JobAccessButtonClass extends Component {
  render() {
    return (
      <JobsContext.Consumer>
        {(context) => {
          const { state, updateStateIndex } = context;
          return (
            <div className="btn-container">
              {state.jobs.map((job, index) => (
                <button
                  className={`job-btn ${
                    index === state.jobIndex && "active-btn"
                  }`}
                  key={job.id}
                  onClick={() => updateStateIndex(index)}
                >
                  {job.company}
                </button>
              ))}
            </div>
          );
        }}
      </JobsContext.Consumer>
    );
  }
}
