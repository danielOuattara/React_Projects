import { FaBars } from "react-icons/fa";
import { SidebarContext } from "./../context/SidebarContext";

export default function Home() {
  return (
    <SidebarContext.Consumer>
      {(context) => (
        <main>
          <button
            className="sidebar-toggle"
            onClick={() => context.handleToggleSidebar()}
          >
            <FaBars />
          </button>
          <button className="btn" onClick={() => context.handleToggleModal()}>
            show modal NOW
          </button>
        </main>
      )}
    </SidebarContext.Consumer>
  );
}

//------------------------------------------------------
