import { Component } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default class JobDetailsClass extends Component {
  render() {
    return (
      <article className="job-info">
        <h3>{this.props.job.title}</h3>
        <h4>{this.props.job.company}</h4>
        <p className="job-date">{this.props.job.dates}</p>
        {this.props.job.duties.map((duty, index) => {
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
