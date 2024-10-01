// using an external custom hook
// ------------------------------------------------------------------------------

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
