import { Component } from "react";

export default class Alert extends Component {
  timeoutID = "";

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.alert !== this.props.alert &&
      this.props.alert.show === true
    ) {
      this.timeoutID = setTimeout(() => {
        return this.props.showAlert();
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }

  render() {
    return (
      <p className={`alert alert-${this.props.alert.type}`}>
        {this.props.alert.msg}
      </p>
    );
  }
}
