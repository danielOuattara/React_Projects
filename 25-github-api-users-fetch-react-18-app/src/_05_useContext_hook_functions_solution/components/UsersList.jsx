import { useContext } from "react";
import UserListItem from "./UserListItem";
import { UsersContext } from "../context/UsersContext";

export default function UsersList() {
  const { usersFetchedState } = useContext(UsersContext);

  return (
    <>
      {usersFetchedState.errorMessage && (
        <h2 style={{ textAlign: "center" }}>
          {usersFetchedState.errorMessage}
        </h2>
      )}
      <h3>fetch 30 users data</h3>
      <ul className="users">
        {usersFetchedState.users.map((person) => (
          <UserListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}
