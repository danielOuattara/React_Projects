import { Component } from "react";

const selectOptions = [5, 10, 15, 20, 25];

export default class PersonPerPageSelector extends Component {
  render() {
    return (
      <form
        onChange={this.props.handlePersonsPerPage}
        className="select-persons"
      >
        <label htmlFor="numberPerson">persons per page : </label>
        <select id="numberPerson" className="btn" name="numberPerson">
          {selectOptions.map((item) => {
            if (item === this.props.personsNumberPerPage) {
              return (
                <option key={item} value={item} selected="true">
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
}
