import { Component } from "react";
import logo from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import subLinks from "../../data";
//-------------------------------------------------------------------------

export default class Navbar extends Component {
  //---------------------
  displaySubMenu = (event) => {
    const menuPageName = event.target.textContent;
    const menuDOMRect = event.target.getBoundingClientRect();
    this.props.setIsSubMenuOpen(true);
    this.props.setSubMenuLocation({
      subMenuCenterPosition: (menuDOMRect.left + menuDOMRect.right) / 2,
      subMenuTopPosition: menuDOMRect.bottom,
    });

    const menuPageToShow = subLinks.find((item) => item.page === menuPageName);
    this.props.setSubMenuPageShown(menuPageToShow);
  };

  //---------------------
  hideSubMenu = (event) => {
    if (!event.target.classList.contains("link-btn")) {
      this.props.setIsSubMenuOpen(false);
    }
  };
  render() {
    return (
      <nav className="nav" onMouseOver={(event) => this.hideSubMenu(event)}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="stripe logo" className="nav-logo" />
            <button
              className="btn toggle-btn"
              onClick={() => this.props.setIsSideBarOpen(true)}
            >
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {subLinks.map((item) => (
              <li
                key={item.page}
                className="link-btn"
                onMouseOver={(event) => this.displaySubMenu(event)}
              >
                {item.page}
              </li>
            ))}
          </ul>
          <button className="btn sign-btn">Sign in</button>
        </div>
      </nav>
    );
  }
}
