import { FaBars } from "react-icons/fa";
import { useSidebarContext } from "./../context/SidebarContext";
export default function Home() {
  const { isModalOpen, setIsModalOpen, isSideBarOpen, setIsSideBarOpen } =
    useSidebarContext(); //<-- this

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
        show modal
      </button>
    </main>
  );
}
