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
  console.log(usersFetchedState);

  //--------------------------------------

  const { singleState, fetchSingleUser } = useFetchingSingleUser();

  return (
    <>
      <h2>react + typescript function solution version 1: using composable</h2>
      <SingleUser singleState={singleState} fetchSingleUser={fetchSingleUser} />
      <UsersList
        users={usersFetchedState.users}
        fetchSingleUser={fetchSingleUser}
      />
    </>
  );
}
