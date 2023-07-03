import { BigSidebarWrapper } from "../../assets/styles";
import { NavLinks, Logo } from "./index";
import { useSelector } from "react-redux";

//-----------------------------------------------------

export default function BigSidebar() {
  const { isSidebarOpen } = useSelector((state) => state.uiState);
  return (
    <BigSidebarWrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </BigSidebarWrapper>
  );
}
