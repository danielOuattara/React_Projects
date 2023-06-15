import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { sidebarActions } from "../redux/sidebar/sidebar-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.sidebarState);
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <div className="neutral">
          <p>redux toolkit functions solution</p>
          <img src={logo} alt="coding addict" className="logo" />
          <button
            className="close-btn"
            onClick={() => dispatch(sidebarActions.toggleSidebar())}
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
