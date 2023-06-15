import { FaBars } from "react-icons/fa";
import { useSidebarContext } from "./../context/SidebarContext";

export default function Home() {
  const { handleToggleModal, handleToggleSidebar } = useSidebarContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={() => handleToggleSidebar()}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => handleToggleModal()}>
        show modal NOW
      </button>
    </main>
  );
}

//------------------------------------------------------
