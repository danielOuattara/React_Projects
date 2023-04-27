import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const rootUrl = "https://api.github.com";

export default function useGitHubFetches() {
  const [gitHubState, setGitHubState] = useState({
    searchUser: "mosh-hamedani",
    error: { show: false, message: "" },
    isLoading: true,
    requests: {},
    gitHubUser: {},
    reposList: [],
    followers: [],
  });

  //----------------------------------------------------------

  const fetchRequestsLimits = useCallback(async function () {
    try {
      const response = await axios(rootUrl + "/rate_limit");
      const {
        limit: requestsLimit,
        remaining: requestsRemaining,
        reset: requestTimeReset,
      } = response.data.rate;

      setGitHubState((prevState) => ({
        ...prevState,
        requests: {
          ...prevState.requests,
          requestsLimit,
          requestsRemaining,
          requestTimeReset,
        },
      }));

      if (requestsRemaining === 0) {
        setGitHubState((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            show: true,
            message: `Requests limit reached: try again in ${new Date(
              requestTimeReset * 1000,
            ).getMinutes()} minutes OR login in with a github account`,
          },
        }));
      }

      setGitHubState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchRequestsLimits();
  }, [fetchRequestsLimits, gitHubState.searchUser]);

  // Promise.allSettled
  //----------------------------------------------------------

  const fetchGitHubUser = useCallback(async function (userArg) {
    try {
      setGitHubState((prevState) => ({
        ...prevState,
        error: { show: false, message: "" },
        isLoading: true,
      }));

      const response = await axios(rootUrl + `/users/${userArg}`);
      if (response) {
        setGitHubState((prevState) => ({
          ...prevState,
          gitHubUser: response.data,
        }));

        const [userRepos, userFollowers] = await Promise.allSettled([
          axios(`${rootUrl}/users/${response.data.login}/repos?per_page=100`),
          axios(`${response.data.followers_url}`),
        ]);

        if (userRepos.status === "fulfilled") {
          setGitHubState((prevState) => ({
            ...prevState,
            reposList: userRepos.value?.data,
          }));
        }

        if (userFollowers.status === "fulfilled") {
          setGitHubState((prevState) => ({
            ...prevState,
            followers: userFollowers.value?.data,
          }));
        }
      }
    } catch (error) {
      setGitHubState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          show: true,
          message: error.message,
        },
      }));
    } finally {
      setGitHubState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }, []);

  useEffect(() => {
    fetchGitHubUser(gitHubState.searchUser);
  }, [fetchGitHubUser, gitHubState.searchUser]);

  return { gitHubState, setGitHubState, fetchRequestsLimits, fetchGitHubUser };
}
