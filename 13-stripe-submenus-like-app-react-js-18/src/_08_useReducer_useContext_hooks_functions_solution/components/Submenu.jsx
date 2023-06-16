import { useState, useRef, useEffect } from "react";
import { useSubMenusContext } from "./../context/SubMenusContext";
//--------------------------------------------------------------

export default function Submenu() {
  const { isSubMenuOpen, subMenuLocation, subMenuPageShown } =
    useSubMenusContext();
  const subMenuContainer = useRef(null);
  const [columns, setColumns] = useState("");

  useEffect(() => {
    subMenuPageShown?.links.length === 3
      ? setColumns("col-3")
      : setColumns("col-4");
    subMenuContainer.current.style.left = `${subMenuLocation?.subMenuCenterPosition}px`;
    subMenuContainer.current.style.top = `${subMenuLocation?.subMenuTopPosition}px`;
  }, [subMenuLocation, subMenuPageShown?.links]);

  return (
    <aside
      className={isSubMenuOpen ? "submenu show" : "submenu"}
      ref={subMenuContainer}
    >
      <h4>{subMenuPageShown.page}</h4>
      <div className={`submenu-center ${columns}`}>
        {subMenuPageShown.links.map((link, index) => {
          return (
            <a key={index} href={link.url}>
              {link.icon} {link.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
