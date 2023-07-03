import { NavbarWrapper } from "../../assets/styles";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { userActions } from "../redux/user/userSlice";
import { uiActions } from "./../redux/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
//------------------------------------------------------------

export default function Navbar() {
  const { user } = useSelector((state) => state.userState);
  const { isShowLogoutOpen } = useSelector((state) => state.uiState);
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(userActions.logoutUser());
    dispatch(uiActions.closeSidebar());
    dispatch(uiActions.toggleShowLogout());
    return toast.success("Log out successful");
  };

  return (
    <NavbarWrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          type="button"
          onClick={() => dispatch(uiActions.toggleSidebar())}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        {user && (
          <div className="btn-container">
            <button
              className="btn"
              type="button"
              onClick={() => dispatch(uiActions.toggleShowLogout())}
            >
              <FaUserCircle /> {user?.name} <FaCaretDown />
            </button>
            <div
              className={
                isShowLogoutOpen ? "dropdown show-dropdown" : "dropdown"
              }
            >
              <button
                type="button"
                className="dropdown-btn"
                onClick={handleLogoutUser}
              >
                logout
              </button>
            </div>
          </div>
        )}
      </div>
    </NavbarWrapper>
  );
}
