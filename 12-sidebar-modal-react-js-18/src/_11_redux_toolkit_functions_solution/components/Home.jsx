import { FaBars } from "react-icons/fa";
import { sidebarActions } from "../redux/sidebar/sidebar-slice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => dispatch(sidebarActions.toggleSidebar())}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => dispatch(sidebarActions.toggleModal())}
      >
        show modal NOW
      </button>
    </main>
  );
}
