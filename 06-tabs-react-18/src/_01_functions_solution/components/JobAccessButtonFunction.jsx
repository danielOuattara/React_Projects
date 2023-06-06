//  CASE 2 : One Big State : OK
//
export default function JobAccessButton({ jobs, jobIndex, setState }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => (
        <button
          className={`job-btn ${index === jobIndex && "active-btn"}`}
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
