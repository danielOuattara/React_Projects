import { Outlet } from "react-router-dom";
import { SharedLayoutWrapper } from "../../assets/styles";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function DashboardSharedLayout() {
  // -------- Dashboard route protection
  const { user } = useSelector((state) => state.userState);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  //----------------------------

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
