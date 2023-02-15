import React, { Component } from "react";

export default class JobAccessButtonClass extends Component {
  render() {
    const {jobs, jobIndex, handleJobIndexChange} = this.props;
    return(
      <div className="btn-container">
          {jobs.map((job, index) => {
              const { id, company } = job;
              return(
                  <button
                    className={`job-btn ${index === jobIndex && 'active-btn'}`}
                    key={id}
                    onClick={() => handleJobIndexChange(index)}
                  >
                    {company}
                  </button>
              );
          })}
      </div>
  );
  }
}


