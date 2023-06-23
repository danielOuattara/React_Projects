import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "./../../utilities";
import { CartButtons, Logo } from "./index";

import { useUserContext, useUIContext } from "../context";
import { NavbarWrapper } from "./styleWrappers";

export default function Navbar() {
  const { toggleSideBar } = useUIContext();
  const { myUser } = useUserContext();

  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <Logo />
          </Link>
          <button className="nav-toggle" onClick={toggleSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavbarWrapper>
  );
}
