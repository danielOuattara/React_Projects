import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";

export default function Sidebar(props) {
  return (
    <aside className={props.isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <p>functions solution</p>
        <button
          className="close-btn"
          onClick={() => props.setIsSideBarOpen(!props.isSideBarOpen)}
        >
          <FaTimes />
        </button>
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
