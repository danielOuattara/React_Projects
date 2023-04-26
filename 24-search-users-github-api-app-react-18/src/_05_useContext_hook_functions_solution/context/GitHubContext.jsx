import { useContext, createContext } from "react";
import { useGitHubFetches } from "../customHooks";

const GitHubContext = createContext();

export default function GitHubContextProvider({ children }) {
  const { gitHubState, fetchRequestsLimits, searchGitHubUser } =
    useGitHubFetches();

  return (
    <GitHubContext.Provider
      value={{ ...gitHubState, fetchRequestsLimits, searchGitHubUser }}
    >
      {children}
    </GitHubContext.Provider>
  );
}

export const useGitHubContext = () => {
  return useContext(GitHubContext);
};
