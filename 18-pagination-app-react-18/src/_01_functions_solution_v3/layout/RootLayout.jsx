import { Outlet /* , useNavigation */ } from "react-router-dom";

export default function RootLayout() {
  // const navigation = useNavigation();
  // console.log("navigation = ", navigation);
  return (
    <>
      {/* {navigation.state === "loading" && <h1>Loading...</h1>} */}
      <Outlet />
    </>
  );
}
