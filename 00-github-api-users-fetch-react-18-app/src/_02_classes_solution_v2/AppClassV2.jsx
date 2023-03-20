import { Component } from "react";
import UserListClass from "./components/UsersListClass";
import SingleUser from "./components/SingleUser";
//-----------------------------------------------------

const url = "https://api.github.com/users";

export default class AppClass extends Component {
  state = {
    usersState: {
      isLoading: true,
      isError: false,
      errorMessage: "",
      users: [],
    },
    singleUserState: {
      singleUserLoading: true,
      singleUserError: false,
      singleUserErrorMessage: "",
      singleUserData: {},
    },
  };

  //--------------------
  fetchUsers = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        this.setState((prevState) => ({
          ...prevState,
          usersState: {
            ...prevState.usersState,
            isError: true,
            isLoading: false,
            errorMessage: `${res.statusText} ${res.status}`,
          },
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUsers = await res.json();
        this.setState((prevState) => ({
          ...prevState,
          usersState: {
            ...prevState.usersState,
            isLoading: false,
            isError: false,
            users: fetchedUsers,
          },
        }));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //-------------------
  fetchSingleUser = async (usernameArg) => {
    try {
      const res = await fetch(`${url}/${usernameArg}`);
      if (!res.ok) {
        this.setState((prevState) => ({
          ...prevState,
          singleUserState: {
            ...prevState.singleUserState,
            singleUserError: true,
            singleUserLoading: false,
            singleUserErrorMessage: `${res.statusText} ${res.status}`,
          },
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUser = await res.json();
        this.setState((prevState) => ({
          ...prevState,
          singleUserState: {
            ...prevState.singleUserState,
            singleUserError: false,
            singleUserLoading: false,
            singleUserErrorMessage: "",
            singleUserData: fetchedUser,
          },
        }));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  //--------------------------
  render() {
    return (
      <>
        <b>
          <p style={{ marginLeft: "2rem" }}> react class solution version 2</p>
        </b>
        <SingleUser
          singleUserState={this.state.singleUserState}
          fetchSingleUser={this.fetchSingleUser}
        />
        <UserListClass users={this.state.usersState.users} />
      </>
    );
  }
}
