//  CASE 2 : One Big State : OK
import { JobsContext } from "./../context/JobsContext";

export default function JobAccessButton() {
  return (
    <JobsContext.Consumer>
      {(context) => {
        const { jobsState, handleToggleJobs } = context;
        return (
          <div className="btn-container">
            {jobsState.jobs.map((job, index) => (
              <button
                className={`job-btn ${
                  index === jobsState.jobIndex && "active-btn"
                }`}
                key={job.id}
                onClick={() => handleToggleJobs(index)}
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
