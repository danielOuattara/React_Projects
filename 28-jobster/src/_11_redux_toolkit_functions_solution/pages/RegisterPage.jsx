import { useState } from "react";
import { Logo } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export default function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>

          <input
            type="text"
            name="name"
            className="form-input"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <button className={`btn btn-block`} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
