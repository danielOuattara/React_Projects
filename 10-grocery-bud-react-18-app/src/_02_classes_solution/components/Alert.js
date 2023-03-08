import { Component } from "react";

export default class Alert extends Component {
  componentDidUpdate(prevProps, prevState, snapshot, timeoutID) {
    this.timeoutID = setTimeout(() => {
      return this.props.showAlert();
    }, 1500);
  }

  render() {
    clearTimeout(this.timeoutID);
    return <p className={`alert alert-${this.props.type}`}>{this.props.msg}</p>;
  }
}

//--------------------------------------------------------
