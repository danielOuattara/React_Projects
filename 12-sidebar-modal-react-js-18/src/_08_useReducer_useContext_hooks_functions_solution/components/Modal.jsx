import { useSidebarContext } from "../context/SidebarContext";
import { FaTimes } from "react-icons/fa";

export default function Modal() {
  const { isModalOpen, handleToggleModal } = useSidebarContext();
  return (
    <div className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <p>useReducer + useContext functions solution</p>
        <button className="close-modal-btn" onClick={() => handleToggleModal()}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
