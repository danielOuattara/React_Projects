import { useEffect } from "react";
import UsersList from "./components/UsersList";
import SingleUser from "./components/SingleUser";
import useFetchingUsers from "./customHooks/useFetchingUsers";
import useFetchingSingleUser from "./customHooks/useFetchingSingleUser";

export default function AppFunction() {
  //------------------------------------

  const { usersFetchedState, fetchingUsers } = useFetchingUsers();
  useEffect(() => {
    fetchingUsers();
  }, []);

  //--------------------------------------

  const { singleState, fetchSingleUser } = useFetchingSingleUser();

  return (
    <>
      <b>
        <p style={{ marginLeft: "2rem" }}>
          react function solution version 1: using composable
        </p>
      </b>
      <SingleUser singleState={singleState} fetchSingleUser={fetchSingleUser} />
      <UsersList users={usersFetchedState.users} />
    </>
  );
}
