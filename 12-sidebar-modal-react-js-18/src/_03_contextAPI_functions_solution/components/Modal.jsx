import { SidebarContext } from "../context/SidebarContext";
import { FaTimes } from "react-icons/fa";

export default function Modal() {
  return (
    <SidebarContext.Consumer>
      {(context) => (
        <div
          className={
            context.isModalOpen ? `modal-overlay show-modal` : `modal-overlay`
          }
        >
          <div className="modal-container">
            <h3>modal content</h3>
            <p>context API functions solution</p>
            <button
              className="close-modal-btn"
              onClick={() => context.setIsModalOpen(!context.isModalOpen)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </SidebarContext.Consumer>
  );
}
