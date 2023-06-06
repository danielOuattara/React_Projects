import { FaAngleDoubleRight } from "react-icons/fa";
import { JobsContext } from "./../context/JobsContext";

export default function JobDetails() {
  return (
    <JobsContext.Consumer>
      {(context) => {
        const job = context.jobsState.jobs[context.jobsState.jobIndex];
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
