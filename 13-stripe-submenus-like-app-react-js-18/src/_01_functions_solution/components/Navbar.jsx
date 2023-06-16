import logo from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import subLinks from "../../data";
//-------------------------------------------------------------------------

export default function Navbar(props) {
  //---------------------
  const displaySubMenu = (event) => {
    const menuDOMRect = event.target.getBoundingClientRect();

    props.setSubMenuLocation({
      subMenuCenterPosition: (menuDOMRect.left + menuDOMRect.right) / 2,
      subMenuTopPosition: menuDOMRect.bottom,
    });

    const menuPageName = event.target.textContent;
    const menuPageToShow = subLinks.find((item) => item.page === menuPageName);
    props.setSubMenuPageShown(menuPageToShow);

    props.setIsSubMenuOpen(true);
  };

  //---------------------
  const hideSubMenu = (event) => {
    if (!event.target.classList.contains("link-btn")) {
      props.setIsSubMenuOpen(false);
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
            onClick={() => props.setIsSideBarOpen(true)}
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
