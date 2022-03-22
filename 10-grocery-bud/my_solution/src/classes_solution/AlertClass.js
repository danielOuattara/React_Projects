import React, { Component } from "react";

export default class AlertClass extends Component {
  render() {
    const { type, msg } = this.props;
    return <p className={`alert alert-${type}`}>{msg}</p>;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.msg !== this.props.msg) {
      const timeout = setTimeout(() => {
        this.props.removeAlert();
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }
}
