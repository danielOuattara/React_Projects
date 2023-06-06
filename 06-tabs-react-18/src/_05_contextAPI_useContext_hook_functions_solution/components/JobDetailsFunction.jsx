// import React from "react";
// import { FaAngleDoubleRight } from "react-icons/fa";

// export default function JobDetails({ job }) {
//   return (
//     <article className="job-info">
//       <h3>{job.title}</h3>
//       <h4>{job.company}</h4>
//       <p className="job-date">{job.dates}</p>
//       {job.duties.map((duty, index) => {
//         return (
//           <div key={index} className="job-desc">
//             <FaAngleDoubleRight className="job-icon" />
//             <p>{duty}</p>
//           </div>
//         );
//       })}
//     </article>
//   );
// }

//-----------------------------------------------------------------

// In the above version, the component receives data as props from parent component
// In this version the component consume directly the context

import { FaAngleDoubleRight } from "react-icons/fa";
import { useJobsContext } from "./../context/JobsContext";

export default function JobDetails() {
  const { state } = useJobsContext();
  const job = state.jobs[state.jobIndex];

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
