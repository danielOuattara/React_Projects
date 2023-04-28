import { useEffect } from "react";
import UserListItem from "./UserListItem";
import useFetchingUsers from "../customHooks/useFetchingUsers";

export default function UsersList() {
  const { fetchingUsers, usersFetchedState } = useFetchingUsers();
  useEffect(() => {
    fetchingUsers();
  }, []);
  return (
    <>
      <h3>fetch 30 users data</h3>
      <ul className="users">
        {usersFetchedState.users.map((person) => (
          <UserListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}
