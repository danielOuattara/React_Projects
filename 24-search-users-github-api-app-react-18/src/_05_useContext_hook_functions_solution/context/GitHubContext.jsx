import { useState, useEffect, useContext, createContext } from "react";
import { mockUser, mockFollowers, mockRepos } from "./mockData";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GitHubContext = createContext();

export default function GitHubContextProvider({ children }) {
  const [gitHubState, setGitHubState] = useState({
    gitHubUser: mockUser,
    reposList: mockRepos,
    followers: mockFollowers,
    isLoading: true,
    error: { show: false, message: "" },
  });
  return (
    <GitHubContext.Provider value={{ ...gitHubState, setGitHubState }}>
      {children}
    </GitHubContext.Provider>
  );
}

export const useGitHubContext = () => {
  return useContext(GitHubContext);
};
