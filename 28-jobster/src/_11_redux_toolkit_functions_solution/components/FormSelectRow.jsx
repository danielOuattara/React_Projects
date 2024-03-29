export default function FormSelectRow(props) {
  return (
    <div className="form-row">
      <label htmlFor={props.name} className="form-label">
        {props.labelText || props.name} :
      </label>
      <select
        className="form-select"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        {props.options.map((item, index) => {
          return (
            <option key={item + index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
