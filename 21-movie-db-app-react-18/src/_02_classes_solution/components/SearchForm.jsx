import { useFetchMovies } from "../customHooks";

export default function SearchForm() {
  const { query, setMovieState, error, results } = useFetchMovies();

  const handleUserQuery = (event) => {
    setMovieState((prevState) => ({ ...prevState, query: event.target.value }));
  };

  return (
    <>
      <form
        className="search-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <h2>Search Movie</h2>
        <input
          type="text"
          className="form-input"
          value={query}
          onChange={handleUserQuery}
        />
        {error.show && <div className="error">{error.message}</div>}
        {!error.show && results && <h4>Results: {results}</h4>}
      </form>
    </>
  );
}
