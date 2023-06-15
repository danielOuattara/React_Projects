import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { SidebarContext } from "./../context/SidebarContext";

export default function Sidebar() {
  return (
    <SidebarContext.Consumer>
      {(context) => (
        <aside
          className={context.isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}
        >
          <div className="sidebar-header">
            <div>
              <p>contextAPI function solution</p>
              <img src={logo} alt="coding addict" className="logo" />
              <button
                className="close-btn"
                onClick={() => context.setIsSideBarOpen(!context.isSideBarOpen)}
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
      )}
    </SidebarContext.Consumer>
  );
}
