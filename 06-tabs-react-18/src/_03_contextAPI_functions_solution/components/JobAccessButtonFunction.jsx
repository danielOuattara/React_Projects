//  CASE 2 : One Big State : OK
import { JobsContext } from "./../context/JobsContext";

export default function JobAccessButton() {
  return (
    <JobsContext.Consumer>
      {(context) => {
        const { state, setState } = context;
        return (
          <div className="btn-container">
            {state.jobs.map((job, index) => (
              <button
                className={`job-btn ${
                  index === state.jobIndex && "active-btn"
                }`}
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
      }}
    </JobsContext.Consumer>
  );
}

//---------------------------------------------------------------------

// CASE 1: many small states data : OK
//
// export default function JobAccessButton({ jobs, value, setValue }) {
//   return (
//     <div className="btn-container">
//       {jobs.map((job, index) => {
//         return (
//           <button
//             className={`job-btn ${index === value && "active-btn"}`}
//             key={job.id}
//             onClick={() => setValue(index)}
//           >
//             {job.company}
//           </button>
//         );
//       })}
//     </div>
//   );
// }
