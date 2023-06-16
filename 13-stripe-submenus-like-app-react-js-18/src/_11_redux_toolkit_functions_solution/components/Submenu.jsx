import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
//--------------------------------------------------------------

export default function Submenu() {
  const { isSubMenuOpen, subMenuLocation, subMenuPageShown } = useSelector(
    (state) => state.stripeSubMenusState,
  );
  const [columns, setColumns] = useState("");
  const subMenuContainerRef = useRef(null);

  useEffect(() => {
    subMenuPageShown.links.length <= 3
      ? setColumns("col-3")
      : setColumns("col-4");
    subMenuContainerRef.current.style.left = `${subMenuLocation.subMenuCenterPosition}px`;
    subMenuContainerRef.current.style.top = `${subMenuLocation.subMenuTopPosition}px`;
  }, [subMenuLocation, subMenuPageShown.links]);

  return (
    <aside
      className={isSubMenuOpen ? "submenu show" : "submenu"}
      ref={subMenuContainerRef}
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
