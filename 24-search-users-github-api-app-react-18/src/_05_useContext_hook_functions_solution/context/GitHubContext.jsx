import { useState, useEffect, useContext, createContext } from "react";
import { mockUser, mockFollowers, mockRepos } from "./mockData";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GitHubContext = createContext();

export default function GitHubContextProvider({ children }) {
  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>;
}

export const useGitHubContext = () => {
  return useContext(GitHubContext);
};
