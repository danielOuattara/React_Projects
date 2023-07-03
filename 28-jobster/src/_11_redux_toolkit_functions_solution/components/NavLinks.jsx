import { NavLink } from "react-router-dom";
import links from "../../utilities/links";
import { useDispatch } from "react-redux";
import { uiActions } from "./../redux/ui/uiSlice";

//----------------------------------------------------
export default function NavLinks() {
  const dispatch = useDispatch();
  return (
    <div className="nav-links">
      {links.map((item) => (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          key={item.id}
          onClick={() => dispatch(uiActions.toggleSidebar())}
          end
        >
          <span className="icon">{item.icon}</span>
          {item.text}
        </NavLink>
      ))}
    </div>
  );
}
