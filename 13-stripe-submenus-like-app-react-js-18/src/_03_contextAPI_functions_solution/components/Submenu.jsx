import { useState, useRef, useEffect } from "react";

//--------------------------------------------------------------

export default function Submenu(props) {
  const subMenuContainer = useRef(null);
  const [columns, setColumns] = useState("");

  useEffect(() => {
    props.subMenuPageShown?.links.length === 3
      ? setColumns("col-3")
      : setColumns("col-4");
    subMenuContainer.current.style.left = `${props.subMenuLocation?.subMenuCenterPosition}px`;
    subMenuContainer.current.style.top = `${props.subMenuLocation?.subMenuTopPosition}px`;
  }, [props.subMenuLocation, props.subMenuPageShown?.links]);

  return (
    <aside
      className={props.isSubMenuOpen ? "submenu show" : "submenu"}
      ref={subMenuContainer}
    >
      <h4>{props.subMenuPageShown.page}</h4>
      <div className={`submenu-center ${columns}`}>
        {props.subMenuPageShown.links.map((link, index) => {
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
