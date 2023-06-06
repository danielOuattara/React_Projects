import { Component } from "react";

import { connect } from "react-redux";
import { toggleJobs } from "../redux/jobs/jobsAction";

class JobAccessButton extends Component {
  render() {
    return (
      <div className="btn-container">
        {this.props.jobsState.jobs.map((job, index) => (
          <button
            key={job.id}
            className={`job-btn ${
              index === this.props.jobsState.jobIndex && "active-btn"
            }`}
            onClick={() => this.props.dispatch(toggleJobs(index))}
          >
            {job.company}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { jobsState: state.jobsState };
};

export default connect(mapStateToProps, null)(JobAccessButton);
