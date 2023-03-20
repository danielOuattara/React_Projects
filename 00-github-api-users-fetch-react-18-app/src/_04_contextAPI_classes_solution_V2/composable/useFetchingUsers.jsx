import { useState } from "react";
import UserType from "../types/UserType";

const url = "https://api.github.com/users";

export default function useFetchingUsers() {
  const [usersFetchedState, setUsersFetchedState] = useState({
    isLoading: true,
    isError: false,
    errorMessage: "",
    users: [],
  });

  async function fetchingUsers() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setUsersFetchedState((prevState) => ({
          ...prevState,
          isError: true,
          isLoading: false,
          errorMessage: `${res.statusText} ${res.status}`,
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUsers = await res.json();
        setUsersFetchedState((prevState) => ({
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

  return { usersFetchedState, fetchingUsers };
}
