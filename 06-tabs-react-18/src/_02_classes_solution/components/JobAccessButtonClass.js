import React, { Component } from "react";

export default class JobAccessButtonClass extends Component {
  render() {
    return (
      <div className="btn-container">
        {this.props.jobs.map((job, index) => {
          return (
            <button
              className={`job-btn ${
                index === this.props.jobIndex && "active-btn"
              }`}
              key={job.id}
              onClick={() => this.props.handleJobIndexChange(index)}
            >
              {job.company}
            </button>
          );
        })}
      </div>
    );
  }
}
