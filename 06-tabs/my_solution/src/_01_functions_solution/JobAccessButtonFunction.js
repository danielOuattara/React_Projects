import React from "react";

export default function JobAccessButton({ jobs, value, setValue }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={`job-btn ${index === value && "active-btn"}`}
            key={job.id}
            onClick={() => setValue(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}
