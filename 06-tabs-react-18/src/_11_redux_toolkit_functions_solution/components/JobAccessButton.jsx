import { useSelector, useDispatch } from "react-redux";
import { jobsActions } from "./../redux/jobs/jobs-slice";

export default function JobAccessButton() {
  const dispatch = useDispatch();
  const { jobs, jobIndex } = useSelector((state) => state.jobsState);
  return (
    <div className="btn-container">
      {jobs.map((job, index) => (
        <button
          key={job.id}
          className={`job-btn ${index === jobIndex && "active-btn"}`}
          onClick={() => dispatch(jobsActions.toggleJobs({ index }))}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
