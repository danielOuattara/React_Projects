import { SmallSidebarWrapper } from "../../assets/styles";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./../redux/ui/uiSlice";
import { Logo, NavLinks } from "./index";
//-------------------------------------------------------

export default function SmallSidebar() {
  const { isSidebarOpen } = useSelector((state) => state.uiState);
  const dispatch = useDispatch();

  return (
    <SmallSidebarWrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(uiActions.toggleSidebar())}
          >
            <FaTimes />
          </button>

          <header>
            <Logo />
          </header>

          <NavLinks />
        </div>
      </div>
    </SmallSidebarWrapper>
  );
}
