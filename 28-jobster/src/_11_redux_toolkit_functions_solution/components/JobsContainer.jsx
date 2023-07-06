import { useEffect } from "react";
import { Loading, PageButtonsContainer, SingleJob } from "./index";
import { JobsContainerWrapper } from "../../assets/styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../redux/allJobs/allJobsAsyncThunk";

//------------------------------------------------------

export default function JobsContainer() {
  const dispatch = useDispatch();
  const { isLoadingAllJobs, jobs, page, totalJobs, numOfPages } = useSelector(
    (state) => state.allJobsState,
  );

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  if (isLoadingAllJobs) {
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
    <>
      <JobsContainerWrapper>
        <h5>
          {totalJobs} job{jobs.length > 1 && "s"} found
        </h5>
        {numOfPages > 1 && <PageButtonsContainer />}
        <div className="jobs">
          {jobs.map((item) => (
            <SingleJob key={item._id} {...item} />
          ))}
        </div>
        {numOfPages > 1 && <PageButtonsContainer />}
      </JobsContainerWrapper>
    </>
  );
}
