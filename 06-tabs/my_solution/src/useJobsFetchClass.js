// import { useState,useEffect } from 'react';

// function useJobsFetch(url) {
//     const [jobs, setJobs] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState("");
//     const [value, setValue] = useState(0);

//       const fetchAgent = async () => {
//           try {
//               const res = await fetch(url);
//               if (!res.ok) {
//                   setError(res.status + " " + res.statusText);
//                   setIsLoading(false);
//                   throw new Error();
//               }
//               const jobsFetched = await res.json();
//               console.log(jobsFetched)
//               setError(false);
//               setJobs(jobsFetched);
//               setIsLoading(false);

//           } catch (error) {
//               return error
//           }
//     }

//     useEffect(() => { fetchAgent() }, [url]);
//     // TODO : something tiny is missing for perfection: learn react custom Hooks

//     return { jobs, setJobs, value, setValue, isLoading, error };
//   }

// export default useJobsFetch;




// import { useState, useEffect } from 'react';
// // This one is OK, is auto-invoked function in useEffect
// function useJobsFetch(url) {

//       const [jobs, setJobs] = useState([]);
//       const [isLoading, setIsLoading] = useState(true);
//       const [error, setError] = useState("");
//       const [value, setValue] = useState(0);

//     useEffect(() => {
//         (async () => {
//             try {
//                 const res = await fetch(url);
//                 if (!res.ok) {
//                     setError(res.status + " " + res.statusText);
//                     setIsLoading(false);
//                     throw new Error();
//                 }
//                 const jobsFetched = await res.json();
//                 setError(false);
//                 setJobs(jobsFetched);
//                 setIsLoading(false);

//             } catch (error) {
//                 return error;
//             }
//         })()
//     }, [url]);

//     return { jobs, setJobs, value, setValue, isLoading, error };
//   }

//   export default useJobsFetch;





import React from "react";

export default class useJobsFetchClass extends React.Component {
  constructor(props, url) {
    super(props);
    this.state = {
      jobs: [],
      isLoading: true,
      error: "",
      value: "",
      url
    };
  }

  componentDidMount() {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          this.setState(() => ({
            error: ` ${res.status} ${res.statusText}`,
            isLoading: false,
          }));
          throw new Error();
        }
        const jobsFetched = await res.json();
        this.setState(() => ({
          error: false,
          jobs: jobsFetched,
          isLoading: false,
        }));

        return this.state
      } catch (error) {
        return error;
      }
    })();
  }

  render() {
    // return { this.statejobs, setJobs, value, setValue, isLoading, error };
    let state = this.state
    return { state };
  }
}
