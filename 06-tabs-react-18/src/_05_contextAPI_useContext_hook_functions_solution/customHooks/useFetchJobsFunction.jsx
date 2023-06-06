//  CASE 2 : One Big State : OK
//
import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

function useFetchJobs() {
  const [state, setState] = useState({
    jobs: [{}],
    isLoading: true,
    error: "",
    jobIndex: 0,
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setState((prevState) => ({
            ...prevState,
            error: `${res.status} ${res.statusText}`,
            isLoading: false,
          }));
          throw new Error();
        }
        const jobsFetched = await res.json();
        setState((prevState) => ({
          ...prevState,
          error: false,
          isLoading: false,
          jobs: jobsFetched,
        }));
      } catch (error) {
        return error;
      }
    };

    fetchJob();
  }, []);

  return { state, setState };
}

export default useFetchJobs;

//-------------------------------------------------------------------

// CASE 1: many small states data

// import { useState, useEffect } from "react";

// const url = "https://course-api.com/react-tabs-project";

// function useFetchJobs() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [jobs, setJobs] = useState([]);
//   const [error, setError] = useState("");
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(url);
//         if (!res.ok) {
//           setError(res.status + " " + res.statusText);
//           setIsLoading(false);
//           throw new Error();
//         }
//         const jobsFetched = await res.json();
//         setError(false);
//         setIsLoading(false);
//         setJobs(jobsFetched);
//       } catch (error) {
//         return error;
//       }
//     };

//     fetchJob();
//   }, []);

//   return { jobs, setJobs, value, setValue, isLoading, error };
// }

// export default useFetchJobs;

//---------------------------------------------------------------------
// IFFE + useEffect:  OK !

// import { useState, useEffect } from "react";
// // This one is OK, is auto-invoked function in useEffect

// function useJobsFetchFunction(url) {
//   const [jobs, setJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch(url);
//         if (!res.ok) {
//           setError(res.status + " " + res.statusText);
//           setIsLoading(false);
//           throw new Error();
//         }
//         const jobsFetched = await res.json();
//         setError(false);
//         setJobs(jobsFetched);
//         setIsLoading(false);
//       } catch (error) {
//         return error;
//       }
//     })();
//   }, [url]);

//   return { jobs, setJobs, value, setValue, isLoading, error };
// }

// export default useJobsFetchFunction;
