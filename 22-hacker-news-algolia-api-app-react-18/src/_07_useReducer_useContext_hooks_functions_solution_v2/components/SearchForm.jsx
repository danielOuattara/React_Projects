import { useStoriesContext } from "./../context";
import { HANDLE_SEARCH } from "../actions/storiesActions";

export default function SearchForm() {
  const { query, dispatchStories } = useStoriesContext();

  const handleSearch = (userQuery) => {
    dispatchStories({ type: HANDLE_SEARCH, payload: userQuery });
  };

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
