import React from "react";

export default function JobAccessButton({ jobs, value, setValue }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const { id, company } = job;
        return (
          <button
            className={`job-btn ${index === value && "active-btn"}`}
            key={id}
            onClick={() => setValue(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
}
