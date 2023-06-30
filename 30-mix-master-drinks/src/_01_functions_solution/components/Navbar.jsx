import { NavbarWrapper } from "../../assets/styles";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <nav>
        <div className="nav-center">
          <span className="logo">MixMaster</span>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/newsletter" className="nav-link">
              Newsletter
            </NavLink>
          </div>
        </div>
      </nav>
    </NavbarWrapper>
  );
}
