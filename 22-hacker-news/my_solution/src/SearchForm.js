import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {query, handleSearch } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e)=> e.preventDefault()}>
      <input
        id="useQuery"
        name="userQuery"
        className="form-input"
        type="search"
        placeholder="Search here for a story"
        onChange={(event) => handleSearch(event.target.value)}
        value={query}
      />
    </form>
  );
};

export default SearchForm;
