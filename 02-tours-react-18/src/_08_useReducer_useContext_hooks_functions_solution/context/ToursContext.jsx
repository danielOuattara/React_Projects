import { createContext, useContext } from "react";
import useFetchTours from "./../customHooks/useFetchTours";

//---------------------------------------------------

export const ToursContext = createContext();

export default function ToursContextProvider(props) {
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

export const useToursContext = () => {
  return useContext(ToursContext);
};
