import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

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
      <p style={{ textAlign: "center" }}>function solution</p>
      <Navbar
        setIsSubMenuOpen={setIsSubMenuOpen}
        setSubMenuLocation={setSubMenuLocation}
        setSubMenuPageShown={setSubMenuPageShown}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Hero setIsSubMenuOpen={setIsSubMenuOpen} />
      <Submenu
        setSubMenuPageShown={setSubMenuPageShown}
        setSubMenuLocation={setSubMenuLocation}
        subMenuPageShown={subMenuPageShown}
        subMenuLocation={subMenuLocation}
        isSubMenuOpen={isSubMenuOpen}
      />
    </>
  );
}
