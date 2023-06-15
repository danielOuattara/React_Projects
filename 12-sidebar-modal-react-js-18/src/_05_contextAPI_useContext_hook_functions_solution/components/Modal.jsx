import { FaTimes } from "react-icons/fa";
import { useSidebarContext } from "./../context/SidebarContext";

export default function Modal() {
  const { isModalOpen, setIsModalOpen } = useSidebarContext();

  return (
    <div className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}>
      <div className="modal-container">
        <h3>modal content</h3>

        <p className="title">context API + useContext hook solutions</p>

        <button
          className="close-modal-btn"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
