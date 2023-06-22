export default function FormRow(props) {
  return (
    <div className="form-row">
      <label htmlFor={props.name} className="form-label">
        {props.labelText || props.name}
      </label>

      <input
        type={props.type}
        name={props.name}
        className="form-input"
        value={props.values}
        onChange={props.handleChange}
      />
    </div>
  );
}
