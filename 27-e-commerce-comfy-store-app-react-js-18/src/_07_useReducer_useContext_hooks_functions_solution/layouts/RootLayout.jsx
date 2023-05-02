import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./../components";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}
