import { Component } from "react";
import { SearchForm, Movies } from "./../components";

export default class Home extends Component {
  render() {
    return (
      <>
        <br /> <hr /> <br />
        <p style={{ textAlign: "center" }}> function solution</p>
        <SearchForm />
        <Movies />
      </>
    );
  }
}
