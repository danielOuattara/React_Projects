import { Component } from "react";
import { JobAccessButton, JobDetails } from "./";
import { connect } from "react-redux";
import { fetchJobs } from "../redux/jobs/jobsAction";

class Container extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }

  render() {
    if (this.props.jobsState.isLoading) {
      return (
        <section className="section loading">
          <h1>Loading ...</h1>
        </section>
      );
    }

    if (this.props.jobsState.error) {
      return (
        <section className="section loading">
          <h1>{this.props.jobsState.error}</h1>
        </section>
      );
    }

    return (
      <div>
        <section className="section">
          <div className="title">
            <p>react redux classes solution</p>
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
}

const mapStateToProps = (state) => {
  return { jobsState: state.jobsState };
};

export default connect(mapStateToProps, null)(Container);
