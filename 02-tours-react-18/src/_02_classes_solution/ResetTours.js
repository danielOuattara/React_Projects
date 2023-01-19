import { Component } from "react";

export default class ResetTours extends Component {
  render() {
    return (
      <main>
        <div className="title">
          <h2>no tour left</h2>
          <button className="btn" onClick={() => this.props.fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
}
