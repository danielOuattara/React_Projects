import { FaBars } from "react-icons/fa";
import { AppContext } from "./../context/AppContext";

export default function Home() {
  return (
    <AppContext.Consumer>
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
    </AppContext.Consumer>
  );
}

//------------------------------------------------------
