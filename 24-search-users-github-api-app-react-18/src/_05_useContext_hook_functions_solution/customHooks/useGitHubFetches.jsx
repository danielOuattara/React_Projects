import { useState } from "react";
import axios from "axios";

const rootUrl = "https://api.github.com";

export default function useGitHubFetches() {
  const [gitHubState, setGitHubState] = useState({
    gitHubUser: {},
    reposList: [],
    followers: [],
    isLoading: true,
    error: { show: false, message: "" },
    requests: {},
  });

  //----------------------------------------------------------
  async function fetchRequestsLimits() {
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
  }

  //----------------------------------------------------------
  async function searchGitHubUser(userArg) {
    const response = await axios(rootUrl + `/users/${userArg}`);
    if (response) {
      setGitHubState((prevState) => ({
        ...prevState,
        gitHubUser: response.data,
      }));

      const userRepos = await axios(
        `${rootUrl}/users/${response.data.login}/repos?per_page=100`,
      );
      if (userRepos.data) {
        setGitHubState((prevState) => ({
          ...prevState,
          reposList: userRepos.data,
        }));
      }

      const userFollowers = await axios(`${response.data.followers_url}`);
      if (userFollowers.data) {
        setGitHubState((prevState) => ({
          ...prevState,
          followers: userFollowers.data,
        }));
      }
    }
  }

  return { gitHubState, setGitHubState, fetchRequestsLimits, searchGitHubUser };
}
