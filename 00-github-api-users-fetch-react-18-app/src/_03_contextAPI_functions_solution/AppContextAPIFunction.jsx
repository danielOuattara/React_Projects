import UsersList from "./components/UsersList";
import SingleUser from "./components/SingleUser";
import SingleUserContextProvider from "./context/SingleUserContext";
import UsersContextProvider from "./context/UsersContext";

export default function AppFunctionContextAPIFunction() {
  return (
    <>
      <b>
        <p style={{ marginLeft: "2rem" }}>
          {" "}
          react context API function + using composable
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
