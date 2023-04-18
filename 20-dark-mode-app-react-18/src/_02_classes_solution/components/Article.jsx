import { Component } from "react";
import moment from "moment";

export default class Article extends Component {
  render() {
    return (
      <article className="post">
        <h2>{this.props.title}</h2>
        <div className="post-info">
          <span>{moment(this.props.date).format("MM dddd Do YYYY")}</span>
          <span>{this.props.length} minutes read</span>
        </div>
        <p>{this.props.snippet}</p>
      </article>
    );
  }
}
