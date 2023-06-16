import { useState } from "react";
import { Hero, Navbar, Sidebar, Submenu } from "./components";

export default function AppContextAPIFunction() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({
    subMenuCenterPosition: 0,
    subMenuTopPosition: 0,
  });
  const [subMenuPageShown, setSubMenuPageShown] = useState({
    page: "",
    links: [],
  });

  return (
    <>
      <Navbar
        setIsSideBarOpen={setIsSideBarOpen}
        setIsSubMenuOpen={setIsSubMenuOpen}
        setSubMenuLocation={setSubMenuLocation}
        setSubMenuPageShown={setSubMenuPageShown}
      />

      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />

      <Hero setIsSubMenuOpen={setIsSubMenuOpen} />

      <Submenu
        isSubMenuOpen={isSubMenuOpen}
        subMenuLocation={subMenuLocation}
        subMenuPageShown={subMenuPageShown}
      />
    </>
  );
}
