import { EyePassword } from "./index";

export default function FormRow(props) {
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
        type={props.type}
        name={props.name}
        className="form-input"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
}
