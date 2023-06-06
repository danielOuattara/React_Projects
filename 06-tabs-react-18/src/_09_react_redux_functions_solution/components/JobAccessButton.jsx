import { connect } from "react-redux";
import { toggleJobs } from "../redux/jobs/jobsAction";

function JobAccessButton(props) {
  return (
    <div className="btn-container">
      {props.jobsState.jobs.map((job, index) => (
        <button
          key={job.id}
          className={`job-btn ${
            index === props.jobsState.jobIndex && "active-btn"
          }`}
          onClick={() => props.dispatch(toggleJobs(index))}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { jobsState: state.jobsState };
};

export default connect(mapStateToProps, null)(JobAccessButton);
