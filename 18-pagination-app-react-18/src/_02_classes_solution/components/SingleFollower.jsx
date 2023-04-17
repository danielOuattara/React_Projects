import { Component } from "react";
// import { Link } from "react-router-dom";

export default class SingleFollower extends Component {
  render() {
    return (
      // <Link to={`/followers/${this.props.login}`}>
      <article className="card">
        <img src={this.props.avatar_url} alt={this.props.login} />
        <h4>{this.props.login}</h4>
        <p className="btn">view profile</p>
      </article>
      // </Link>
    );
  }
}
