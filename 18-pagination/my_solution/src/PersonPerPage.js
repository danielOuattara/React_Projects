import React from "react";

function PersonPerPage(props) {
  return (
    <form onChange={props.handlePersonsPerPage} className="select-persons">
      <label htmlFor="numberPerson">persons per page : </label>
      <select id="numberPerson" className="btn" name="numberPerson">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    </form>
  );
}

export default PersonPerPage;
