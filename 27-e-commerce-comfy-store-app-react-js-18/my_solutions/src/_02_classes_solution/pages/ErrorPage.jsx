import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorPage extends Component {
  render() {
    return (
      <>
        <h1> Error: page Not Found</h1>
        <h2>404</h2>

        <Link to="/">Go Back To Home</Link>
      </>
    );
  }
}
