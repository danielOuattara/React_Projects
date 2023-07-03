import { useState } from "react";
import { FormRow } from "../../components";
import { DashboardFormPageWrapper } from "./../../../assets/styles/";

import { updateUser } from "../../redux/user/userAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

//------------------------------------------------------

export default function Profile() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.userState);

  const [userData, setUserData] = useState({
    name: user.name || "",
    email: user.email || "",
    lastName: user.lastName || "",
    location: user.location || "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !userData.name ||
      !userData.email ||
      !userData.lastName ||
      !userData.location
    ) {
      return toast.error("Please, fill all the fields");
    }
    return dispatch(updateUser(userData));
  };

  return (
    <DashboardFormPageWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3> {user.name}'s profile</h3>
        <div className="form-center">
          <FormRow
            handleChange={handleChange}
            labelText="name"
            name="name"
            type="text"
            value={userData.name}
          />
          <FormRow
            handleChange={handleChange}
            labelText="last name"
            name="lastName"
            type="text"
            value={userData.lastName}
          />
          <FormRow
            handleChange={handleChange}
            labelText="email"
            name="email"
            type="text"
            value={userData.email}
          />
          <FormRow
            handleChange={handleChange}
            labelText="location"
            name="location"
            type="text"
            value={userData.location}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </DashboardFormPageWrapper>
  );
}
