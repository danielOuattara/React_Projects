// import { useState, useEffect, createContext } from "react";

// export const ToursContext = createContext();

// const url = "https://www.course-api.com/react-tours-project";

// function ToursContextProvider(props) {
//   const [loading, setLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [tours, setTours] = useState([]);

//   const fetchTours = async () => {
//     // async function fetchTours() {
//     try {
//       const res = await fetch(url);
//       if (!res.ok) {
//         setIsError(true);
//         setLoading(false);
//         setErrorMessage(`${res.status} ${res.statusText}`);
//         throw Error(`${res.status} ${res.statusText}`);
//       }
//       const data = await res.json();
//       setTours(data);
//       setLoading(false);
//       setErrorMessage("");
//     } catch (err) {
//       setLoading(false);
//       setIsError(true);
//       return err;
//     }
//   };

//   useEffect(() => {
//     fetchTours();
//   }, []);

//   const removeTourItem = (id) => {
//     setTours((tours) => {
//       return tours.filter((item) => item.id !== id);
//     });
//   };

//   return (
//     <ToursContext.Provider
//       value={{
//         loading,
//         isError,
//         errorMessage,
//         tours,
//         removeTourItem,
//         fetchTours,
//       }}
//     >
//       {props.children}
//     </ToursContext.Provider>
//   );
// }

// export default ToursContextProvider;

// using an external custom hook
//------------------------------------------------------------------------------

import { useEffect, createContext } from "react";
import useFetchTours from "./../components/useFetchTours";
export const ToursContext = createContext();

const url = "https://www.course-api.com/react-tours-project";

function ToursContextProvider(props) {
  const { loading, isError, errorMessage, tours, fetchTours, removeTourItem } =
    useFetchTours(url);

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <ToursContext.Provider
      value={{
        loading,
        isError,
        errorMessage,
        tours,
        removeTourItem,
        fetchTours,
      }}
    >
      {props.children}
    </ToursContext.Provider>
  );
}

export default ToursContextProvider;
