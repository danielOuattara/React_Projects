import { Component } from "react";

export default class UserListItemClass extends Component {
  render() {
    return (
      <li>
        <img src={this.props.person.avatar_url} alt={this.props.person.login} />
        <div>
          <h4>{this.props.person.login}</h4>
          <a href={this.props.person.html_url} target="_blank" rel="noreferrer">
            Link to {this.props.person.login}
          </a>
        </div>
        <p>Hello</p>
      </li>
    );
  }
}
