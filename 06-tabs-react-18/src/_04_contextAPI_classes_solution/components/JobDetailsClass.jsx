import { Component } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { JobsContext } from "../context/JobsContext";

export default class JobDetailsClass extends Component {
  render() {
    return (
      <JobsContext.Consumer>
        {(context) => {
          const job = context.state.jobs[context.state.jobIndex];
          return (
            <article className="job-info">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p className="job-date">{job.dates}</p>
              {job.duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon" />
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          );
        }}
      </JobsContext.Consumer>
    );
  }
}
