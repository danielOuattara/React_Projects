import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { useGitHubContext } from "../context";
import { SearchErrorWrapper, SearchWrapper } from "./wrappers";
//---------------------------------------------------

export default function Search() {
  const { requests, error, isLoading, fetchRequestsLimits, searchGitHubUser } =
    useGitHubContext();

  const [searchUser, setSearchUser] = useState("mosh-hamedani");

  useEffect(() => {
    searchGitHubUser(searchUser);
    fetchRequestsLimits();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchUser) {
      searchGitHubUser(searchUser);
      fetchRequestsLimits();
    }
    return;
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
              value={searchUser}
              onChange={(event) => setSearchUser(event.target.value)}
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
