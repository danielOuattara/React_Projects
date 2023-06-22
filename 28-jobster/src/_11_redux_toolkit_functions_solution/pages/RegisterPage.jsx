import { useState } from "react";
import { Logo } from "../components";
import styles from "./Register.module.css";

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
    <section className={styles.section}>
      <form className={`form ${styles["form-2"]}`} onSubmit={handleSubmit}>
        <Logo className={styles.logo} />
        <h3 className={styles.h3}>Login</h3>
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
