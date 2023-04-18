import { useContext, createContext } from "react";
import useFetchMovies from "../customHooks/useFetchMovies";

export const defaultImage = `https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`;

const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const { isLoading, error, moviesList, page, query, results, setMovieState } =
    useFetchMovies();
  return (
    <MovieContext.Provider
      value={{
        defaultImage,
        isLoading,
        error,
        moviesList,
        page,
        query,
        results,
        setMovieState,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const useMovieContext = () => {
  return useContext(MovieContext);
};
