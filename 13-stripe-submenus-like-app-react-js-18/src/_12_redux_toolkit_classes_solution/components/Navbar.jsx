import { Component } from "react";
import logo from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import subLinks from "../../data";
import { connect } from "react-redux";
import { stripeSubMenusSliceActions } from "./../redux/stripeSubMenus/stripeSubMenus-slice";
//-------------------------------------------------------------------------

class Navbar extends Component {
  //---------------------
  displaySubMenu = (event) => {
    const menuDOMRect = event.target.getBoundingClientRect();
    this.props.handleSetSubMenuLocation({
      subMenuCenterPosition: (menuDOMRect.left + menuDOMRect.right) / 2,
      subMenuTopPosition: menuDOMRect.bottom,
    });

    const menuPageName = event.target.textContent;
    const menuPageToShow = subLinks.find((item) => item.page === menuPageName);
    this.props.handleSetSubMenuPageShown(menuPageToShow);

    this.props.handleToggleSubMenu(true);
  };

  //---------------------
  hideSubMenu = (event) => {
    if (!event.target.classList.contains("link-btn")) {
      this.props.handleToggleSubMenu(false);
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
              onClick={() => this.props.handleToggleSideBar(true)}
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
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSideBar: (bool) => {
      return dispatch(stripeSubMenusSliceActions.toggleSideBar(bool));
    },

    handleToggleSubMenu: (bool) => {
      return dispatch(stripeSubMenusSliceActions.toggleSubMenu(bool));
    },
    handleSetSubMenuLocation: (objectArg) => {
      return dispatch(stripeSubMenusSliceActions.setSubMenuLocation(objectArg));
    },
    handleSetSubMenuPageShown: (objectArg) => {
      return dispatch(
        stripeSubMenusSliceActions.setSubMenuPageShown(objectArg),
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
