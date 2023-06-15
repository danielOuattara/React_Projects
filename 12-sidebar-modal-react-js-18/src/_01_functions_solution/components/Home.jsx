import { FaBars } from "react-icons/fa";

export default function Home(props) {
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => props.setIsSideBarOpen(!props.isSideBarOpen)}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => props.setIsModalOpen(!props.isModalOpen)}
      >
        show modal NOW
      </button>
    </main>
  );
}
