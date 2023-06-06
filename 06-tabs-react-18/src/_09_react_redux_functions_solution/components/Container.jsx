import { useEffect } from "react";
import { JobAccessButton, JobDetails } from "./";
import { connect } from "react-redux";
import { fetchJobs } from "../redux/jobs/jobsAction";

function Container(props) {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (props.jobsState.isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  if (props.jobsState.error) {
    return (
      <section className="section loading">
        <h1>{props.jobsState.error}</h1>
      </section>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="title">
          <p>context API + functions solution</p>
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

const mapStateToProps = (state) => {
  return { jobsState: state.jobsState };
};

export default connect(mapStateToProps, null)(Container);
