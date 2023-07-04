import { useEffect } from "react";
import { Loading, SingleJob } from "./index";
import { JobsContainerWrapper } from "../../assets/styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../redux/allJobs/allJobsAsyncThunk";

//------------------------------------------------------

export default function JobsContainer() {
  const dispatch = useDispatch();
  const { isLoading, jobs } = useSelector((state) => state.allJobsState);

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <JobsContainerWrapper>
        <Loading center />
      </JobsContainerWrapper>
    );
  }
  if (jobs.length === 0) {
    return (
      <JobsContainerWrapper>
        <h2>No jobs to display...</h2>
      </JobsContainerWrapper>
    );
  }
  return (
    <JobsContainerWrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((item) => (
          <SingleJob key={item._id} {...item} />
        ))}
      </div>
    </JobsContainerWrapper>
  );
}
