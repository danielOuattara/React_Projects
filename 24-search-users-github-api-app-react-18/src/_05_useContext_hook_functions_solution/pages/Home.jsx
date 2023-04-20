import {
  Dashboard,
  Login,
  ErrorPage,
  PrivateRoute,
  AuthWrapper,
} from "./../pages";

export default function Home() {
  return (
    <>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>useContext hook function solution</p>
      <div>
        <Dashboard></Dashboard>
        <Login />
        <ErrorPage />
      </div>
    </>
  );
}
