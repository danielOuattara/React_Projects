import { useState, useEffect } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(urlParams) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [fetchData, setFetchData] = useState([]);
  const [results, setResults] = useState(0);

  const fetchMovies = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status} `);
      }

      const data = await response.json();
      if (data.Response === "True") {
        setFetchData(data.Search || data);
        setResults(data.totalResults);
        setError({ show: false, message: "" });
      } else {
        setError({ show: true, message: data.Error });
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError({ show: true, message: error });
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, fetchData, results };
}

export default useFetch;
