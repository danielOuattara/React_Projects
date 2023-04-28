import { MdSearch } from "react-icons/md";
import { useGitHubContext } from "../context";
import { SearchErrorWrapper, SearchWrapper } from "./../wrappers";
import { useRef } from "react";
//---------------------------------------------------

export default function Search() {
  const {
    requests,
    error,
    isLoading,
    fetchGitHubUser,
    searchUser,
    setGitHubState,
  } = useGitHubContext();

  const searchUserRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchUser) return;
    setGitHubState((prevState) => ({
      ...prevState,
      searchUser: searchUserRef.current.value,
    }));
    fetchGitHubUser(searchUserRef.current.value);
  };
  return (
    <section className="section">
      <SearchErrorWrapper>
        <p>{error && error.message}</p>
      </SearchErrorWrapper>
      <SearchWrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter a github user"
              ref={searchUserRef}
            />
            {requests.requestsRemaining > 0 && !isLoading && (
              <button type="submit">search</button>
            )}
          </div>
        </form>
        <h3>
          requests: {requests.requestsRemaining}/{requests.requestsLimit}
        </h3>
      </SearchWrapper>
    </section>
  );
}
