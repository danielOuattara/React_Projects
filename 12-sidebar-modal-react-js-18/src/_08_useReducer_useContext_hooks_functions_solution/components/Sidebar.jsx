import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { useSidebarContext } from "./../context/SidebarContext";

export default function Sidebar() {
  const { isSidebarOpen, handleToggleSidebar } = useSidebarContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <div className="neutral">
          <p>useReducer + useContext functions solution</p>
          <img src={logo} alt="coding addict" className="logo" />
          <button className="close-btn" onClick={() => handleToggleSidebar()}>
            <FaTimes />
          </button>
        </div>
      </div>
      <ul className="links">
        {links.map((item) => (
          <li key={item.id}>
            {" "}
            <a href={item.url}>
              {item.icon}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
