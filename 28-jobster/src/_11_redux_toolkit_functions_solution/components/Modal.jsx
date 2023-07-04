import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "./../redux/modal/modalSlice";
import { deleteJob } from "../redux/singleJob/singleJobAsyncThunk";
import { toast } from "react-toastify";
//-------------------------------------------------------------------------

export default function Modal() {
  const { deleteJobId } = useSelector((state) => state.singleJobState);
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4> confirm job suppression ?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn clear-job-btn "
            onClick={() => dispatch(deleteJob(deleteJobId))}
          >
            Yes
          </button>
          <button
            type="button"
            className="btn confirm-btn "
            onClick={() => dispatch(modalActions.hideModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}
