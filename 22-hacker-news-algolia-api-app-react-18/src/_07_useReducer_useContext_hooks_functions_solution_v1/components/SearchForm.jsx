import { useStoriesContext } from "./../context";

export default function SearchForm() {
  const { query, handleSearch } = useStoriesContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
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
}
