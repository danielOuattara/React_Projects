import { FaTimes } from "react-icons/fa";

export default function Modal(props) {
  return (
    <div
      className={
        props.isModalOpen ? `modal-overlay show-modal` : `modal-overlay`
      }
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <p>useReducer hooks functions solution</p>
        <button
          className="close-modal-btn"
          onClick={() => props.handleToggleModal()}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
