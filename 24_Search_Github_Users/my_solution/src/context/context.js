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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });

  //----------------------------------------------------
  function toggleError(show, message) {
    setError({ show, message });
  }

  //----------------------------------------------------
  async function searchGitHubUser(user) {
    try {
      setIsLoading(true);
      const response = await axios(rootUrl + `/users/${user}`);
      if (response) {
        setGithubUser(response.data);
        const { login, followers_url } = response.data;
        const userRepos = await axios.get(`${rootUrl}/users/${login}/repos?per_page=100`);
        if (userRepos.data) {
          setRepos(userRepos.data);
        }
        const userFollowers = await axios.get(`${followers_url}`);
        if (userFollowers.data) {
          setFollowers(userFollowers.data);
        }
      }
      setIsLoading(false);
    } catch (error) {
      toggleError(true, "User Not Found. Try another name");
    } finally {
      checkRequets();
      setIsLoading(false);
    }
  }

  //----------------------------------------------------
  async function checkRequets() {
    try {
      setIsLoading(true);
      const response = await axios(rootUrl + "/rate_limit");
      const {
        limit: requestsLimit,
        remaining: requestsRemaining,
        reset: requestTimeReset,
      } = response.data.rate;
      setRequests({ requestsLimit, requestsRemaining, requestTimeReset });
      if (requestsRemaining === 0) {
        toggleError(
          true,
          "Requests limit reached: try again in 1 hour OR login in with a github account"
        );
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  //----------------------------------------------------
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
        searchGitHubUser,
        error,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
