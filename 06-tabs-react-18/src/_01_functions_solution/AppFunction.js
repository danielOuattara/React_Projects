//  CASE 2 : One Big State : OK
//
import JobAccessButtonFunction from "./components/JobAccessButtonFunction";
import JobDetailsFunction from "./components/JobDetailsFunction";
import useFetchJobs from "./useFetchJobsFunction";

function App() {
  const url = "https://course-api.com/react-tabs-project";

  const { state, setState } = useFetchJobs(url);

  if (state.isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  if (state.error) {
    return (
      <section className="section loading">
        <h1>{state.error}</h1>
      </section>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="title">
          <h2>experiences</h2>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <JobAccessButtonFunction
            jobIndex={state.jobIndex}
            setState={setState}
            jobs={state.jobs}
          />
          <JobDetailsFunction job={state.jobs[state.jobIndex]} />
        </div>
      </section>
    </div>
  );
}

export default App;

//------------------------------------------------------------

// CASE 1: many small states data : OK
//
// import JobAccessButtonFunction from "./JobAccessButtonFunction";
// import JobDetailsFunction from "./components/JobDetailsFunction";
// import useFetchJobs from "./useFetchJobsFunction";

// function App() {
//   const url = "https://course-api.com/react-tabs-project";
//   const { jobs, value, setValue, isLoading, error } = useFetchJobs(url);

//   if (isLoading) {
//     return (
//       <section className="section loading">
//         <h1>Loading ...</h1>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="section loading">
//         <h1>{error}</h1>
//       </section>
//     );
//   }

//   return (
//     <div>
//       <section className="section">
//         <div className="title">
//           <h2>experiences</h2>
//           <div className="underline"></div>
//         </div>

//         <div className="jobs-center">
//           <JobAccessButtonFunction
//             value={value}
//             setValue={setValue}
//             jobs={jobs}
//           />
//           <JobDetailsFunction value={value} jobs={jobs} />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;
