import { FormInputRow, FormSelectRow } from "./../../components";
import { DashboardFormPageWrapper } from "./../../../assets/styles/";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { singleJobAction } from "../../redux/singleJob/singleJobSlice";
import { createJob } from "../../redux/singleJob/singleJobAsyncThunk";
import { useEffect } from "react";

//----------------------------------------------------

export default function AddJob() {
  const dispatch = useDispatch();

  const {
    isLoadingSingleJob,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((state) => state.singleJobState);

  const { user } = useSelector((state) => state.userState);

  useEffect(() => {
    // eventually will check for isEditing
    if (!isEditing) {
      dispatch(
        singleJobAction.handleJobInputChange({
          name: "jobLocation",
          value: user.location,
        }),
      );
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    return dispatch(singleJobAction.handleJobInputChange({ name, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!position || !company || !jobLocation) {
      return toast.error("Please Fill Out All Fields");
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  return (
    <DashboardFormPageWrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>

        <div className="form-center">
          <FormInputRow
            type="text"
            name="position"
            value={position}
            handleChange={handleChange}
          />
          <FormInputRow
            type="text"
            name="company"
            value={company}
            handleChange={handleChange}
          />
          <FormInputRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleChange}
          />

          {/* job status HERE */}
          <FormSelectRow
            name="status"
            id="status"
            options={statusOptions}
            selected={status}
            initialValue={status}
            handleChange={handleChange}
          />

          {/* job type HERE */}
          <FormSelectRow
            name="jobType"
            labelText="job type"
            id="jobType"
            options={jobTypeOptions}
            selected={jobType}
            initialValue={jobType}
            handleChange={handleChange}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(singleJobAction.clearJobInput())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoadingSingleJob}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </DashboardFormPageWrapper>
  );
}
