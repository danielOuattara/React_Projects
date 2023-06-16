import logo from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import subLinks from "../../data";
import { connect } from "react-redux";
import {
  toggleSideBar,
  toggleSubMenu,
  setSubMenuLocation,
  setSubMenuPageShown,
} from "./../redux/stripeSubMenus/stripeSubMenusActions";
//-------------------------------------------------------------------------

function Navbar(props) {
  //---------------------
  const displaySubMenu = (event) => {
    const menuDOMRect = event.target.getBoundingClientRect();

    props.handleSetSubMenuLocation({
      subMenuCenterPosition: (menuDOMRect.left + menuDOMRect.right) / 2,
      subMenuTopPosition: menuDOMRect.bottom,
    });

    const menuPageName = event.target.textContent;
    const menuPageToShow = subLinks.find((item) => item.page === menuPageName);
    props.handleSetSubMenuPageShown(menuPageToShow);

    props.handleToggleSubMenu(true);
  };

  //---------------------
  const hideSubMenu = (event) => {
    if (!event.target.classList.contains("link-btn")) {
      props.handleToggleSubMenu(false);
    }
  };
  //---------------------

  return (
    <nav className="nav" onMouseOver={(event) => hideSubMenu(event)}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe logo" className="nav-logo" />
          <button
            className="btn toggle-btn"
            onClick={() => props.handleToggleSideBar(true)}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {subLinks.map((item) => (
            <li
              key={item.page}
              className="link-btn"
              onMouseOver={(event) => displaySubMenu(event)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSideBar: (bool) => {
      return dispatch(toggleSideBar(bool));
    },

    handleToggleSubMenu: (bool) => {
      return dispatch(toggleSubMenu(bool));
    },
    handleSetSubMenuLocation: (objectArg) => {
      return dispatch(setSubMenuLocation(objectArg));
    },
    handleSetSubMenuPageShown: (objectArg) => {
      return dispatch(setSubMenuPageShown(objectArg));
    },
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
