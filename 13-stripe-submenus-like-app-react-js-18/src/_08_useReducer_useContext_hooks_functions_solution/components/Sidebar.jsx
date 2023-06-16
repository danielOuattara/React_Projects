import React from "react";
import { FaTimes } from "react-icons/fa";
import subLinks from "../../data";
import { useSubMenusContext } from "./../context/SubMenusContext";

export default function Sidebar() {
  const { isSideBarOpen, handleToggleSideBar } = useSubMenusContext();
  return (
    <aside
      className={isSideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}
    >
      <div className="sidebar">
        <button
          className="close-btn"
          onClick={() => handleToggleSideBar(false)}
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
  );
}
