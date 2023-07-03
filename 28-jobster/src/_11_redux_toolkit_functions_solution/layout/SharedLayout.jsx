import { Outlet } from "react-router-dom";
import { SharedLayoutWrapper } from "../../assets/styles";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

export default function SharedLayout() {
  return (
    <SharedLayoutWrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </SharedLayoutWrapper>
  );
}
