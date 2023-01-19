import { Component } from "react";

export default class Error extends Component {
  render() {
    return (
      <main>
        <div className="title">
          <h2>{this.props.errorMessage}</h2>
        </div>
      </main>
    );
  }
}
