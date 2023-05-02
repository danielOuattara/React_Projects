import logo from "./../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utilities/constants";
import CartButtons from "./CartButtons";
import { useProductsContext, useUserContext } from "../context";
import { NavbarWrapper } from "./styleWrappers";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </NavbarWrapper>
  );
}
