import { useEffect } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../redux/allJobs/allJobsAsyncThunk";

export default function Stats() {
  const dispatch = useDispatch();

  const { isLoadingAllJobs, monthlyApplications } = useSelector(
    (state) => state.allJobsState,
  );

  useEffect(() => {
    dispatch(getStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoadingAllJobs) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}
