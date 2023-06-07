import { FaAngleDoubleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function JobDetails(props) {
  const { jobs, jobIndex } = useSelector((state) => {
    return state.jobsState;
  });
  const job = jobs[jobIndex];
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
