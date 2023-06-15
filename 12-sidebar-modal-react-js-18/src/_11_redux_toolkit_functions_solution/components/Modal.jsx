import { FaTimes } from "react-icons/fa";
import { sidebarActions } from "../redux/sidebar/sidebar-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Modal() {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.sidebarState);
  return (
    <div className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <p>redux toolkit functions solution</p>
        <button
          className="close-modal-btn"
          onClick={() => dispatch(sidebarActions.toggleModal())}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
