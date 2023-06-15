import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { useSidebarContext } from "./../context/SidebarContext";

export default function Sidebar() {
  const { isSideBarOpen, setIsSideBarOpen } = useSidebarContext();
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <div>
          <p>context API + useContext hook solutions</p>
          <img src={logo} alt="coding addict" className="logo" />

          <button
            className="close-btn"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          >
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
