import React, { useState, useContext, useEffect } from "react";

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
export const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  const [results, setResults] = useState("");

  const fetchMovies = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status} `);
      }

      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
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
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);

  return (
    <AppContext.Provider
      value={{ isLoading, error, movies, query, setQuery, results, defaultImage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
