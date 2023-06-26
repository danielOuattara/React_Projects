import { NavLink } from "react-router-dom";
import logo from "./../../logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? StyleSheet.active : null
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
