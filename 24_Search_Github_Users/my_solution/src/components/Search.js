import React, { useState, useContext } from "react";

import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";
import { SearchWrapper, SearchErrorWrapper } from "./Wrappers";
const Search = () => {
  const {
    requests: { requestsRemaining, requestsLimit, requestTimeReset },
  } = useContext(GithubContext);
  const [user, setUser] = useState("");

  // get things from global context

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      console.log(user);
    }
  };
  return (
    <section className="section">
      <SearchWrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter a github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requestsRemaining > 0 && <button type="submit">search</button>}
          </div>
        </form>
        <h3>
          requests: {requestsRemaining}/{requestsLimit}
        </h3>
      </SearchWrapper>
    </section>
  );
};

export default Search;
