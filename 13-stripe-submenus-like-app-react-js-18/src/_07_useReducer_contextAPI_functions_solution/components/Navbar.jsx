import logo from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { SubMenusContext } from "./../context/SubMenusContext";
import subLinks from "../../data";
//-------------------------------------------------------------------------

export default function Navbar() {
  //---------------------
  return (
    <SubMenusContext.Consumer>
      {(context) => {
        const {
          handleToggleSideBar,
          handleToggleSubMenus,
          handleSetSubMenuLocation,
          handleSetSubMenuPageShown,
        } = context;

        //---------------------
        const displaySubMenu = (event) => {
          const menuPageName = event.target.textContent;
          const menuDOMRect = event.target.getBoundingClientRect();
          handleToggleSubMenus(true);
          handleSetSubMenuLocation({
            subMenuCenterPosition: (menuDOMRect.left + menuDOMRect.right) / 2,
            subMenuTopPosition: menuDOMRect.bottom,
          });

          const menuPageToShow = subLinks.find(
            (item) => item.page === menuPageName,
          );
          handleSetSubMenuPageShown(menuPageToShow);
        };

        //---------------------
        const hideSubMenu = (event) => {
          if (!event.target.classList.contains("link-btn")) {
            handleToggleSubMenus(false);
          }
        };

        return (
          <nav className="nav" onMouseOver={(event) => hideSubMenu(event)}>
            <div className="nav-center">
              <div className="nav-header">
                <img src={logo} alt="stripe logo" className="nav-logo" />
                <button
                  className="btn toggle-btn"
                  onClick={() => handleToggleSideBar(true)}
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
      }}
    </SubMenusContext.Consumer>
  );
}
