import { createContext, useContext } from "react";
import useFetchTours from "./../customHooks/useFetchTours";
export const ToursContext = createContext();

const url = "https://www.course-api.com/react-tours-project";

export default function ToursContextProvider(props) {
  const { loading, isError, errorMessage, tours, fetchTours, removeTourItem } =
    useFetchTours(url);

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
