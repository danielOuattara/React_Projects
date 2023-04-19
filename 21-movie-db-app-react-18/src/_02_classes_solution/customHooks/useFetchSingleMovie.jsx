import { useState, useEffect } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=`;

export default function useFetchSingleMovie(movieId) {
  const [singleMovieState, setSingleMovieState] = useState({
    isLoading: true,
    error: { show: false, message: "" },
    movie: {},
  });

  useEffect(() => {
    const fetchSingleMovie = async (url) => {
      try {
        let fetchError = "";
        const response = await fetch(url);

        if (!response.ok) {
          fetchError = `${response.statusText} ${response.status}. `;
        }

        const fetchedMovie = await response.json();

        if (fetchedMovie?.Response === "False") {
          fetchError += fetchedMovie.Error;
          throw new Error(fetchError);
        }

        setSingleMovieState((prevState) => ({
          ...prevState,
          movie: fetchedMovie,
          error: { show: false, message: "" },
          isLoading: false,
        }));
      } catch (err) {
        console.log(err);
        setSingleMovieState((prevState) => ({
          ...prevState,
          isLoading: false,
          error: { show: true, message: err.message },
        }));
      }
    };

    fetchSingleMovie(`${API_ENDPOINT}${movieId}`);
  }, [movieId]);

  return { ...singleMovieState };
}
