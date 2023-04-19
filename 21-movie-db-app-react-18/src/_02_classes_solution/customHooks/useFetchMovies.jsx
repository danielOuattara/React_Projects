import { useState, useEffect } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
export const defaultImage = `https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`;

export default function useFetchMovies() {
  const [movieState, setMovieState] = useState({
    isLoading: true,
    error: { show: false, message: "" },
    moviesList: [],
    query: "war",
    results: 0,
    page: 1,
  });

  useEffect(() => {
    const customEvent = window.addEventListener("scroll", () => {
      const margin = 200;
      if (
        window.innerHeight + window.scrollY + margin >=
        window.document.body.scrollHeight
      ) {
        setMovieState((prevState) => ({
          ...prevState,
          page: prevState.page + 1,
        }));
      }
    });

    return () => window.removeEventListener("scroll", customEvent);
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      let url = `${API_ENDPOINT}&s=${movieState.query}&page=${movieState.page}`;
      try {
        let fetchError = "";
        const response = await fetch(url);

        if (!response.ok) {
          fetchError = `${response.statusText} ${response.status}. `;
        }

        const fetchedData = await response.json();
        console.log("fetchedData = ", fetchedData);

        if (fetchedData?.Response === "False") {
          fetchError += fetchedData.Error;
          throw new Error(fetchError);
        }

        setMovieState((prevState) => ({
          ...prevState,
          moviesList: [...prevState.moviesList, ...fetchedData.Search],
          results: fetchedData.totalResults,
          error: { show: false, message: "" },
          isLoading: false,
        }));
      } catch (err) {
        console.log(err);
        setMovieState((prevState) => ({
          ...prevState,
          isLoading: false,
          error: { show: true, message: err.message },
        }));
      }
    };

    fetchMovies();
  }, [movieState.query, movieState.page]);

  console.log("movieState.moviesList = ", movieState.moviesList);

  return { ...movieState, setMovieState, defaultImage };
}
