import { useContext, createContext } from "react";
import { useGitHubFetches } from "../customHooks";

const GitHubContext = createContext();

export default function GitHubContextProvider({ children }) {
  const { gitHubState, setGitHubState, fetchRequestsLimits, fetchGitHubUser } =
    useGitHubFetches();

  return (
    <GitHubContext.Provider
      value={{
        ...gitHubState,
        setGitHubState,
        fetchRequestsLimits,
        fetchGitHubUser,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
}

export const useGitHubContext = () => {
  return useContext(GitHubContext);
};
