import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
}
