import { NavbarWrapper } from "../../assets/styles";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { uiActions } from "./../redux/ui/uiSlice";
import { logoutAndClearReduxState } from "../redux/user/userAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
//------------------------------------------------------------

export default function Navbar() {
  const { user } = useSelector((state) => state.userState);
  const { isShowLogoutOpen } = useSelector((state) => state.uiState);
  const dispatch = useDispatch();

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
                onClick={() => dispatch(logoutAndClearReduxState(null))}
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
