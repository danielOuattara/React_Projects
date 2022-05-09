import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error, results } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
      <h2>Search Movie</h2>
      <input
        type="search"
        className="form-input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {error.show && <div className="error">{error.message}</div>}
      {!error.show && results && <h4>Results: {results}</h4>}
    </form>
  );
};

export default SearchForm;
