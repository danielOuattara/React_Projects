import UserListItem from "./UserListItem";
import { UsersContext } from "../context/UsersContext";

export default function UsersList() {
  return (
    <UsersContext.Consumer>
      {(context) => (
        <>
          <h3>fetch 30 users data</h3>
          <ul className="users">
            {context.usersFetchedState.users.map((person) => (
              <UserListItem key={person.id} person={person} />
            ))}
          </ul>
        </>
      )}
    </UsersContext.Consumer>
  );
}
