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
        <p>function solution</p>
        <button
          className="close-modal-btn"
          onClick={() => props.setIsModalOpen(!props.isModalOpen)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
