import { createContext, useContext } from "react";
import useFetchJob from "./../customHooks/useFetchJobsFunction";

const JobsContext = createContext();

export default function JobContextProvider(props) {
  const { setState, state } = useFetchJob();
  return (
    <JobsContext.Provider value={{ state, setState }}>
      {props.children}
    </JobsContext.Provider>
  );
}

export const useJobsContext = () => {
  return useContext(JobsContext);
};
