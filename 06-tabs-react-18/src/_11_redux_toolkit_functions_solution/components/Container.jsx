import { useEffect } from "react";
import { JobAccessButton, JobDetails } from "./";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../redux/jobs/jobs-async-actions";

export default function Container() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.jobsState);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section loading">
        <h1>{error}</h1>
      </section>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="title">
          <p>redux toolkit functions solution</p>
          <h2>experiences</h2>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <JobAccessButton />
          <JobDetails />
        </div>
      </section>
    </div>
  );
}
