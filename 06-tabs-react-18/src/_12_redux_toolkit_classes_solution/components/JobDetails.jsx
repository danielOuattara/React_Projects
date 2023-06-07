import { Component } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { connect } from "react-redux";

class JobDetails extends Component {
  render() {
    const job = this.props.jobsState.jobs[this.props.jobsState.jobIndex];
    return (
      <article className="job-info">
        <h3>{job.title}</h3>
        <h4>{job.company}</h4>
        <p className="job-date">{job.dates}</p>
        {job.duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return { jobsState: state.jobsState };
};

export default connect(mapStateToProps, null)(JobDetails);
