import { useJobsContext } from "./../context/JobsContext";

export default function JobAccessButton() {
  const { jobsState, handleToggleJobs } = useJobsContext();
  return (
    <div className="btn-container">
      {jobsState.jobs.map((job, index) => (
        <button
          className={`job-btn ${index === jobsState.jobIndex && "active-btn"}`}
          key={job.id}
          onClick={() => handleToggleJobs(index)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
