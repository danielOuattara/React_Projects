import React, { Component } from "react";
import logo from "./../images/logo.svg";
import { FaBars } from "react-icons/fa";
import sublinks from "./../data";
import { AppContext } from "./ContextClass";

export default class Navbar extends Component {
  static contextType = AppContext;

  displaySubMenu = (event) => {
    const {
      handleSetSubMenuOpen,
      handleSetSubMenuLocation,
      handleSetSubMenuPageShown,
    } = this.context;

    const subMenuPageName = event.target.textContent;
    const tempBTN = event.target.getBoundingClientRect();
    const subMenuCenterPosition = (tempBTN.left + tempBTN.right) / 2;
    const subMenuTopPosition = tempBTN.bottom - 3;
    handleSetSubMenuOpen(true);
    handleSetSubMenuLocation(subMenuCenterPosition, subMenuTopPosition);

    const menuPageToShow = sublinks.find(
      (item) => item.page === subMenuPageName
    );
    handleSetSubMenuPageShown(menuPageToShow);
  };

  handleSubMenu = (event) => {
    const { handleSetSubMenuOpen } = this.context;
    if (!event.target.classList.contains("link-btn")) {
      handleSetSubMenuOpen(false);
    }
  };

  render() {
    const { handleSetSideBarOpen } = this.context;
    return (
      <nav className="nav" onMouseOver={(event) => this.handleSubMenu(event)}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="stripe logo" className="nav-logo" />
            <button
              className="btn toggle-btn"
              onClick={() => handleSetSideBarOpen(true)}
            >
              <FaBars />{" "}
            </button>
          </div>
          <ul className="nav-links">
            <li
              className="link-btn"
              onMouseOver={(event) => this.displaySubMenu(event)}
              // onMouseOut={() => hideSubMenu()}
            >
              products
            </li>
            <li
              className="link-btn"
              onMouseOver={(event) => this.displaySubMenu(event)}
            >
              developers
            </li>
            <li
              className="link-btn"
              onMouseOver={(event) => this.displaySubMenu(event)}
            >
              company
            </li>
          </ul>
          <button className="btn sign-btn">Sign in</button>
        </div>
      </nav>
    );
  }
}
