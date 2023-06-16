import { Component } from "react";
import { FaTimes } from "react-icons/fa";
import subLinks from "../../data";
import { SubMenuContext } from "./../context/SubMenuContext";

export default class Sidebar extends Component {
  render() {
    return (
      <SubMenuContext.Consumer>
        {(context) => (
          <aside
            className={
              context.isSideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
            }
          >
            <div className="sidebar">
              <button
                className="close-btn"
                onClick={() => context.setIsSideBarOpen(false)}
              >
                <FaTimes />
              </button>
              <div className="sub-links">
                {subLinks.map((item, index) => {
                  return (
                    <article key={index}>
                      <h4>{item.page}</h4>
                      <div className="sidebar-sub-links">
                        {item.links.map((subItem, subIndex) => {
                          return (
                            <a key={subIndex} href={subItem.url}>
                              {subItem.icon}
                              {subItem.label}
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
        )}
      </SubMenuContext.Consumer>
    );
  }
}
