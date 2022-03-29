import React from "react";
import logo from "./../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./ContextClass";
import sublinks from "../data";

const Navbar = () => {
  const {
    sideBarOpen,
    setSideBarOpen,
    subMenuOpen,
    setSubMenuOpen,
    subMenuLocation,
    setSubMenuLocation,
    subMenuPageShown,
    setSubMenuPageShown,
  } = useGlobalContext();

  const displaySubMenu = (event) => {
    const subMenuPageName = event.target.textContent;
    const tempBTN = event.target.getBoundingClientRect();
    const subMenuCenterPosition = (tempBTN.left + tempBTN.right) / 2;
    const subMenuTopPosition = tempBTN.bottom - 3;
    setSubMenuOpen(true);
    setSubMenuLocation({
      centerPosition: subMenuCenterPosition,
      topPosition: subMenuTopPosition,
    });

    const menuPageToShow = sublinks.find((item) => item.page === subMenuPageName)
    // console.log('menuPageToShow = ', menuPageToShow)
    setSubMenuPageShown(menuPageToShow );
  };

  // const hideSubMenu = () => {
  //   setSubMenuOpen(false)
  // }

  const handleSubMenu = (event) => {
    if(!event.target.classList.contains('link-btn')) {
      setSubMenuOpen(false)
    }

  }

  return (
    <nav className="nav" onMouseOver={(event) => handleSubMenu(event)}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe logo" className="nav-logo" />
          <button
            className="btn toggle-btn"
            onClick={() => setSideBarOpen(true)}
          >
            <FaBars />{" "}
          </button>
        </div>
        <ul className="nav-links">
          <li
            className="link-btn"
            onMouseOver={(event) => displaySubMenu(event)}
            // onMouseOut={() => hideSubMenu()}
          >
            products
          </li>
          <li
            className="link-btn"
            onMouseOver={(event) => displaySubMenu(event)}
          >
            developers
          </li>
          <li
            className="link-btn"
            onMouseOver={(event) => displaySubMenu(event)}
          >
            company
          </li>
        </ul>
        <button className="btn sign-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
