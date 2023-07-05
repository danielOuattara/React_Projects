import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { JobWrapper } from "../../assets/styles";
import { useDispatch } from "react-redux";
import { JobInfo } from "./index";
import moment from "moment";
import { modalActions } from "../redux/modal/modalSlice";
import { singleJobAction } from "../redux/singleJob/singleJobSlice";

//------------------------------------------

export default function SingleJob(props) {
  const dispatch = useDispatch();
  const date = moment(props.createdAt).format("MMM Do, YYYY");
  return (
    <JobWrapper>
      <header>
        <div className="main-icon">{props.company.charAt(0)}</div>
        <div className="info">
          <h5>{props.position}</h5>
          <p>{props.company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={props.jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={props.jobType} />
          <div className={`status ${props.status}`}>{props.status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  singleJobAction.setEditJob({
                    isEditing: true,
                    editJobId: props._id,
                    position: props.position,
                    company: props.company,
                    jobLocation: props.jobLocation,
                    jobType: props.jobType,
                    status: props.status,
                  }),
                )
              }
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => {
                dispatch(singleJobAction.getDeleteJobId(props._id));
                dispatch(modalActions.showModal());
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </JobWrapper>
  );
}
