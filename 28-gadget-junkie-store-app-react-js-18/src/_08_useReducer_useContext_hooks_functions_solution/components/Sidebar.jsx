import { Link } from "react-router-dom";
import { useUserContext, useUIContext } from "../context/";
import { FaTimes } from "react-icons/fa";
import { links } from "./../../utilities";
import CartButtons from "./CartButtons";
import { SidebarContainerWrapper } from "./styleWrappers";
import { Logo } from "./index";
export default function Sidebar() {
  const { toggleSideBar, isSideBarOpen } = useUIContext();
  const { myUser } = useUserContext();

  return (
    <SidebarContainerWrapper>
      <aside
        className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <Logo />
          <button className="close-btn" type="button" onClick={toggleSideBar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((item) => (
            <li key={item.id}>
              <Link to={item.url} onClick={toggleSideBar}>
                {item.text}
              </Link>
            </li>
          ))}

          {myUser && (
            <li>
              <Link to="/checkout" onClick={toggleSideBar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainerWrapper>
  );
}
