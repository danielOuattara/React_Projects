import UserListItem from "./UserListItem";

export default function UsersList(props) {
  return (
    <>
      <h3>fetch 30 users data</h3>
      <ul className="users">
        {props.users.map((person) => (
          <UserListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}
