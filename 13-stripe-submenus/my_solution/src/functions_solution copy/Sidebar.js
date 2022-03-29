import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "./ContextFunction";

const Sidebar = () => {
  const { sideBarOpen, setSideBarOpen, subMenuOpen, setSubMenuOpen, subLinks } =
    useGlobalContext();
  return (
    <aside className={sideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <div className="sidebar">
        <button className="close-btn" onClick={() => setSideBarOpen(false)}>
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
};

export default Sidebar;
