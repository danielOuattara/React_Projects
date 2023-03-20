import UsersList from "./components/UsersList";
import SingleUser from "./components/SingleUser";
import SingleUserContextProvider from "./context/SingleUserContext";
import UsersContextProvider from "./context/UsersContext";

export default function AppUseContextHookFunction() {
  return (
    <>
      <b>
        <p style={{ marginLeft: "2rem" }}>
          {" "}
          useContext hook function solution + using custom hooks
        </p>
      </b>
      <SingleUserContextProvider>
        <SingleUser />
      </SingleUserContextProvider>
      <UsersContextProvider>
        <UsersList />
      </UsersContextProvider>
    </>
  );
}
