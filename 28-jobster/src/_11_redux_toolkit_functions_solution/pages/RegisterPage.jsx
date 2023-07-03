import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import { RegisterPageWrapper } from "./../../assets/styles";
import { toast } from "react-toastify";

import { registerUser, loginUser } from "./../redux/user/user-slice";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
//--------------------------------------------------------------------

export default function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
    viewPassword: false,
  });

  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.user);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.email || !state.password || (!state.isMember && !state.name)) {
      return toast.error("Please Fill Out All Fields");
    }
    if (state.isMember) {
      return dispatch(
        loginUser({ email: state.email, password: state.password }),
      );
    }

    return dispatch(
      registerUser({
        name: state.name,
        email: state.email,
        password: state.password,
      }),
    );
  };

  const toggleMember = () => {
    setState({ ...state, isMember: !state.isMember });
  };

  const toggleViewPassword = () => {
    setState({ ...state, viewPassword: !state.viewPassword });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [navigate, user]);

  return (
    <RegisterPageWrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{state.isMember ? "Login" : "Register"}</h3>

        {!state.isMember && (
          <FormRow
            handleChange={handleChange}
            labelText="name"
            name="name"
            type="text"
            value={state.name}
          />
        )}

        <FormRow
          handleChange={handleChange}
          labelText="email"
          name="email"
          type="email"
          value={state.email}
        />

        <FormRow
          handleChange={handleChange}
          labelText="password"
          name="password"
          type={state.viewPassword ? "text" : "password"}
          value={state.password}
          toggleViewPassword={toggleViewPassword}
          viewPassword={state.viewPassword}
        />

        <button className={`btn btn-block`} type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <p>
          {" "}
          {state.isMember ? "Not a member yet ?" : "Already a member ?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {state.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </RegisterPageWrapper>
  );
}
