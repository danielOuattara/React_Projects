import { useState } from "react";
import UserType from "./../types/UserType";

export default function useFetchingSingleUser() {
  const [singleState, setSingleState] = useState({
    singleUserLoading: true,
    singleUserError: false,
    singleUserErrorMessage: "",
    singleUserData: {},
  });

  const url = "https://api.github.com/users";

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

  return { singleState, fetchSingleUser };
}
