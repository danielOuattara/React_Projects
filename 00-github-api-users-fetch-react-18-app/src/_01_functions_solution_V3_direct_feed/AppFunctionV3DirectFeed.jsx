import UsersList from "./components/UsersList";
import SingleUser from "./components/SingleUser";

export default function AppFunctionV3DirectFeed() {
  return (
    <>
      <b>
        <p style={{ marginLeft: "2rem" }}>
          react function solution version 3: component direct feed to custom
          hook
        </p>
      </b>
      <SingleUser />
      <UsersList />
    </>
  );
}
