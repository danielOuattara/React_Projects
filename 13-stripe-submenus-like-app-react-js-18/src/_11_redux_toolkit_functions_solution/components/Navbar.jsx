import logo from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import subLinks from "../../data";
import { stripeSubMenusSliceActions } from "./../redux/stripeSubMenus/stripeSubMenus-slice";
import { useDispatch } from "react-redux";
//-------------------------------------------------------------------------

export default function Navbar() {
  //---------------------
  const dispatch = useDispatch();

  const displaySubMenu = (event) => {
    const menuDOMRect = event.target.getBoundingClientRect();

    dispatch(
      stripeSubMenusSliceActions.handleSetSubMenuLocation({
        subMenuCenterPosition: (menuDOMRect.left + menuDOMRect.right) / 2,
        subMenuTopPosition: menuDOMRect.bottom,
      }),
    );

    const menuPageName = event.target.textContent;
    const menuPageToShow = subLinks.find((item) => item.page === menuPageName);
    dispatch(
      stripeSubMenusSliceActions.handleSetSubMenuPageShown(menuPageToShow),
    );

    dispatch(stripeSubMenusSliceActions.handleToggleSubMenu(true));
  };

  //---------------------
  const hideSubMenu = (event) => {
    if (!event.target.classList.contains("link-btn")) {
      dispatch(stripeSubMenusSliceActions.handleToggleSubMenu(false));
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
            onClick={() =>
              dispatch(stripeSubMenusSliceActions.handleToggleSideBar(true))
            }
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
