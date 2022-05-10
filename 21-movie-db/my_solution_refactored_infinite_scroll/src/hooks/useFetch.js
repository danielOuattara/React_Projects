import { useState, useEffect } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(urlParams) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  const [fetchData, setFetchData] = useState([]);
  const [results, setResults] = useState("");
  const [page, setPage] = useState(1);

  const fetchMovies = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`${response.statusText} ${response.status} `);
      }

      const data = await response.json();
      console.log("data === ", data);
      if (data.Response === "True") {
        setFetchData((previousData) => [...previousData, ...data.Search]);
        // setFetchData(data.Search || data);
        setIsLoading(false);

        setError({ show: false, message: "" });
      } else {
        setError({ show: true, message: data.Error });
        setIsLoading(false);
      }
      
      setResults(data.totalResults);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setError({ show: true, message: error });
    }
  };

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      const margin = 1;
      if (
        /* !isLoading && */
        window.innerHeight + window.scrollY + margin >=
          window.document.body.scrollHeight
      ) {
        setIsLoading(true);
        setPage((previousPage) => previousPage + 1);
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  useEffect(() => {
    // if (urlParams.includes("&=s")) {
    //   urlParams = `${urlParams}`;
    // }
    fetchMovies(`${API_ENDPOINT}${urlParams}&page=${page}`);
  }, [urlParams, page]);

  return { isLoading, error, fetchData, results, page };
}

export default useFetch;
