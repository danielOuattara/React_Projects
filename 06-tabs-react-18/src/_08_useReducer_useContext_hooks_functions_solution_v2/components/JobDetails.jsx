import { FaAngleDoubleRight } from "react-icons/fa";
import { useJobsContext } from "./../context/JobsContext";

export default function JobDetails() {
  const { jobsState } = useJobsContext();
  const job = jobsState.jobs[jobsState.jobIndex];
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
}
