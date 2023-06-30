import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components";

export default function HomeLayout() {
  const navigation = useNavigation();
  // const data = "some data"; // for info purpose only, check the docs for more

  //---------------------------
  // return (
  //   <>
  //     <Navbar />
  //     <section className="page">
  //       {navigation.state === "loading" ? (
  //         <div className="loading" />
  //       ) : (
  //         <Outlet
  //         // for info purpose only, check the docs for more
  //         // context={{ data }}
  //         />
  //       )}
  //     </section>
  //   </>
  // );

  //---------------------------

  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
}

export async function loader({ request }) {
  return "something from homeLayout";
}
