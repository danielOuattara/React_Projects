//  CASE 2 : One Big State : OK
import { useJobsContext } from "./../context/JobsContext";

export default function JobAccessButton() {
  const { state, setState } = useJobsContext();
  return (
    <div className="btn-container">
      {state.jobs.map((job, index) => (
        <button
          className={`job-btn ${index === state.jobIndex && "active-btn"}`}
          key={job.id}
          onClick={() =>
            setState((prevState) => ({ ...prevState, jobIndex: index }))
          }
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
