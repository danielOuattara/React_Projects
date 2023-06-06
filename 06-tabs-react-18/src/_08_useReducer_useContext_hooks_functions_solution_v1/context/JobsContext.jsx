import { createContext, useContext } from "react";
import useFetchJob from "./../customHooks/useFetchJobs";

const JobsContext = createContext();

export default function JobsContextProvider(props) {
  const { jobsState, handleToggleJobs } = useFetchJob();
  return (
    <JobsContext.Provider value={{ jobsState, handleToggleJobs }}>
      {props.children}
    </JobsContext.Provider>
  );
}

export const useJobsContext = () => {
  return useContext(JobsContext);
};
