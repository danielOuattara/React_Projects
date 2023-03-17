import { useState, useRef, useEffect } from "react";
import { AppContext } from "./../context/AppContext";
//--------------------------------------------------------------

export default function Submenu() {
  const subMenuContainer = useRef(null);
  const [columns, setColumns] = useState("");

  const [localSubMenuPageShown, setLocalSubMenuPageShown] = useState(undefined);
  const [localSubMenuLocation, setLocalSubMenuLocation] = useState(undefined);

  useEffect(() => {
    localSubMenuPageShown?.links.length === 3
      ? setColumns("col-3")
      : setColumns("col-4");
    subMenuContainer.current.style.left = `${localSubMenuLocation?.subMenuCenterPosition}px`;
    subMenuContainer.current.style.top = `${localSubMenuLocation?.subMenuTopPosition}px`;
  }, [localSubMenuLocation, localSubMenuPageShown?.links]);

  return (
    <AppContext.Consumer>
      {(context) => {
        const { isSubMenuOpen, subMenuLocation, subMenuPageShown } = context;
        setLocalSubMenuLocation(subMenuLocation);
        setLocalSubMenuPageShown(subMenuPageShown);
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
      }}
    </AppContext.Consumer>
  );
}
