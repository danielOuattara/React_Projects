import { Component } from "react";
import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";

export default class Sidebar extends Component {
  render() {
    return (
      <aside
        className={
          this.props.isSideBarOpen ? "sidebar show-sidebar" : "sidebar"
        }
      >
        <div className="sidebar-header">
          <div>
            <p>classes solution</p>
            <img src={logo} alt="coding addict" className="logo" />
            <button
              className="close-btn"
              onClick={() =>
                this.props.toggleSideBar(!this.props.isSideBarOpen)
              }
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
}
