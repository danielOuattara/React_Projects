import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState({});
  const [loading, setLoading] = useState();
  // error: here

  const checkRequets = async () => {
    try {
      const response = await axios(rootUrl + "/rate_limit");
      const {
        limit: requestsLimit,
        remaining: requestsRemaining,
        reset: requestTimeReset,
      } = response.data.rate;
      setRequests({ requestsLimit, requestsRemaining, requestTimeReset });
      if (requestsRemaining === 0) {
        // throw new Error ( request limit reached, try again in 1 hour OR login in with a github account)
      }
    } catch (error) {
      console.log(error);
    }
  };
  // rateLimiter()

  useEffect(() => {
    checkRequets();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        setGithubUser,
        repos,
        setRepos,
        followers,
        setFollowers,
        requests,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
