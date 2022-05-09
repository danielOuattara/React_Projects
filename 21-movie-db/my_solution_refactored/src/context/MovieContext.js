import React, { useState, useContext } from "react";
import useFetch from "./../hooks/useFetch";
// make sure to use https

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const {
    isLoading,
    error,
    fetchData: movies,
    results,
  } = useFetch(`&s=${query}`);

  return (
    <MovieContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
        results,
        defaultImage,
        // API_ENDPOINT,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(MovieContext);
};

export { MovieContext, MovieContextProvider };
