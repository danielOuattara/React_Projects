import { EyePassword } from "./index";

export default function FormRowInput(props) {
  return (
    <div className="form-row">
      <label htmlFor={props.name} className="form-label">
        {props.labelText || props.name} : &nbsp;
        <span className="">
          {props.name === "password" && (
            <EyePassword
              toggleViewPassword={props.toggleViewPassword}
              viewPassword={props.viewPassword}
            />
          )}
        </span>
      </label>

      <input
        className="form-input"
        id={props.name}
        name={props.name}
        onChange={props.handleChange}
        type={props.type}
        value={props.value}
      />
    </div>
  );
}
