import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";
import SingleUser from "./components/SingleUser";

const url = "https://api.github.com/users";

export default function AppFunction() {
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    errorMessage: "",
    users: [],
  });

  const [singleState, setSingleState] = useState({
    singleUserLoading: true,
    singleUserError: false,
    singleUserErrorMessage: "",
    singleUserData: {},
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setState((prevState) => ({
            ...prevState,
            isError: true,
            isLoading: false,
            errorMessage: `${res.statusText} ${res.status}`,
          }));
          throw Error(res.statusText);
        } else {
          const fetchedUsers = await res.json();
          setState((prevState) => ({
            ...prevState,
            isLoading: false,
            isError: false,
            users: fetchedUsers,
          }));
        }
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchUsers();
  }, []);

  async function fetchSingleUser(usernameArg) {
    try {
      const res = await fetch(`${url}/${usernameArg}`);
      if (!res.ok) {
        setSingleState((prevState) => ({
          ...prevState,
          singleUserError: true,
          singleUserLoading: false,
          singleUserErrorMessage: `${res.statusText} ${res.status}`,
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUser = await res.json();
        setSingleState((prevState) => ({
          ...prevState,
          singleUserError: false,
          singleUserLoading: false,
          singleUserErrorMessage: "",
          singleUserData: fetchedUser,
        }));
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h2>react + typescript function solution version 2: large</h2>
      <SingleUser singleState={singleState} fetchSingleUser={fetchSingleUser} />
      <UsersList users={state.users} />
    </>
  );
}
