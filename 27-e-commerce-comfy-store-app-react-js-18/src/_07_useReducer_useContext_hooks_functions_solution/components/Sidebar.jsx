import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProductsContext, useUserContext } from "../context/";
import { FaTimes } from "react-icons/fa";
import { links } from "../utilities/constants";
import CartButtons from "./CartButtons";
import { SidebarContainerWrapper } from "./styleWrappers";

export default function Sidebar() {
  const isOpen = true;
  return (
    <SidebarContainerWrapper>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfy sloth" />
          <button className="close-btn" type="button">
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-links">
          {links.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}

          <li>
            <Link to={"checkout"}>checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainerWrapper>
  );
}
