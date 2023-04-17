// import { useState, useEffect } from "react";
// import { paginator } from "../utilities";
// const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

// export default function useFetchFollowers(personsNumberPerPage) {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchFollowers = async () => {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(() => paginator(data, personsNumberPerPage));
//       setLoading(false);
//     };
//     fetchFollowers();
//   }, [personsNumberPerPage]);

//   return { loading, data };
// }

//--------------------------------------------------------

/* 
CORRECTION: 
Data are not re-fetched every update of "personsNumberPerPage" as above. 
So, a single root fetch is made then data is stored and rendered accordingly 
to the pagination needs or number of followers by page requested
*/

import { useState, useEffect } from "react";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export default function useFetchFollowers() {
  const [loading, setLoading] = useState(true);
  const [rootData, setRootData] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setRootData(fetchedData);
      setLoading(false);
    };
    fetchFollowers();
  }, []);

  return { loading, rootData };
}
