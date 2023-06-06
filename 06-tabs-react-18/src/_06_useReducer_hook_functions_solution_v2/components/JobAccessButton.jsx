//  CASE 2 : One Big State : OK
//
export default function JobAccessButton({ jobs, jobIndex, handleToggleJobs }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => (
        <button
          className={`job-btn ${index === jobIndex && "active-btn"}`}
          key={job.id}
          onClick={() => handleToggleJobs(index)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
