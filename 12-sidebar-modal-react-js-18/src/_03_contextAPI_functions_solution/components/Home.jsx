import { FaBars } from "react-icons/fa";
import { SidebarContext } from "./../context/SidebarContext";

export default function Home() {
  return (
    <SidebarContext.Consumer>
      {(context) => (
        <main>
          <button
            className="sidebar-toggle"
            onClick={() => context.setIsSideBarOpen(!context.isSideBarOpen)}
          >
            <FaBars />
          </button>
          <button
            className="btn"
            onClick={() => context.setIsModalOpen(!context.isModalOpen)}
          >
            show modal NOW
          </button>
        </main>
      )}
    </SidebarContext.Consumer>
  );
}

//------------------------------------------------------
