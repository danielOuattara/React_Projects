import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { PhotoContext } from "./../context/PhotoContext";

function PhotoForm() {
  const { query, setQuery, submitQueryRequest } = useContext(PhotoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQueryRequest();
  };

  return (
    <section className="search">
      <form className="search-form">
        <input
          type="text"
          placeholder="search"
          className="form-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          <FaSearch />
        </button>
      </form>
    </section>
  );
}

export default PhotoForm;
