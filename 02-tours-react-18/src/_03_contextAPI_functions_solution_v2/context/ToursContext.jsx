import { createContext } from "react";
import useFetchTours from "./../customHooks/useFetchTours";
export const ToursContext = createContext();

function ToursContextProvider(props) {
  const { loading, isError, errorMessage, tours, fetchTours, removeTourItem } =
    useFetchTours();

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
