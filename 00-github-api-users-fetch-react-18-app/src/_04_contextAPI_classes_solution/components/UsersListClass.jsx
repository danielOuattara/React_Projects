import { Component } from "react";
import UserListItemClass from "./UserListItemClass";

export default class UsersListClass extends Component {
  render() {
    return (
      <>
        <h3>fetch 30 users data</h3>
        <ul className="users">
          {this.props.users.map((person) => (
            <UserListItemClass key={person.id} person={person} />
          ))}
        </ul>
      </>
    );
  }
}
