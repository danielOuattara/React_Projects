import React, { Component } from "react";
import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { ToggleContext } from "./contextClass";

export class SidebarClass extends Component {
  render() {
    return (
      <ToggleContext.Consumer>
        {(context) => {
          const { showSideBar, toggleSideBar } = context;
          return (
            <aside className={showSideBar ? `sidebar show-sidebar` : `sidebar`}>
              <div className="sidebar-header">
                <img src={logo} alt="logo sidebar" className="logo" />
                <button className="close-btn" onClick={() => toggleSideBar()}>
                  <FaTimes />
                </button>
              </div>
              <ul className="links">
                {links.map((link) => {
                  return (
                    <li key={link.id}>
                      <a href={link.url}>
                        {link.icon} {link.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul className="social-icons">
                {social.map((link) => {
                  return (
                    <li key={link.id}>
                      <a href={link.url}>{link.icon}</a>
                    </li>
                  );
                })}
              </ul>
            </aside>
          );
        }}
      </ToggleContext.Consumer>
    );
  }
}

export default SidebarClass;
