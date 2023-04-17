const selectOptions = [5, 10, 15, 20, 25];

export default function PersonPerPageSelector(props) {
  return (
    <form onChange={props.handlePersonsPerPage} className="select-persons">
      <label htmlFor="numberPerson">persons per page : </label>
      <select id="numberPerson" className="btn" name="numberPerson">
        {selectOptions.map((item) => {
          if (item === 10) {
            return (
              <option key={item} value={item} defaultValue={item}>
                {item}
              </option>
            );
          }

          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </form>
  );
}
