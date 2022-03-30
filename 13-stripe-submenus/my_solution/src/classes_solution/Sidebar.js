import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { AppContext } from "./ContextClass";

export default class Sidebar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const { sideBarOpen, handleSetSideBarOpen } = context;

          return (
            <aside
              className={
                sideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
              }
            >
              <div className="sidebar">
                <button
                  className="close-btn"
                  onClick={() => handleSetSideBarOpen(false)}
                >
                  <FaTimes />
                </button>
                <div className="sublinks">
                  {sublinks.map((item, index) => {
                    const { page, links } = item;
                    return (
                      <article key={index}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublinks">
                          {links.map((subItem, subIndex) => {
                            const { url, label, icon } = subItem;
                            return (
                              <a key={subIndex} href={url}>
                                {icon}
                                {label}
                              </a>
                            );
                          })}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </aside>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
