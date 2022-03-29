import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./ContextClass";

const Submenu = () => {
  const {
    sideBarOpen,
    setSideBarOpen,
    subMenuOpen,
    setSubMenuOpen,
    subMenuLocation,
    setSubMenuLocation,
    subMenuPageShown: { links, page },
    subMenuPageShown,
    setSubMenuPageShown,
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('');

  useEffect(() => {
    links.length === 3 ?  setColumns('col-3'): setColumns('col-4')
    const subMenu = container.current;
    const { centerPosition, topPosition } = subMenuLocation;
    subMenu.style.left = `${centerPosition}px`;
    subMenu.style.top = `${topPosition}px`;
  }, [subMenuLocation, links]);

  return (
    <aside className={subMenuOpen ? "submenu show" : "submenu"} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { icon, url, label } = link;
          return (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
