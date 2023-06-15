import { FaBars } from "react-icons/fa";

export default function Home(props) {
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => props.handleToggleSidebar()}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => props.handleToggleModal()}>
        show modal NOW
      </button>
    </main>
  );
}
