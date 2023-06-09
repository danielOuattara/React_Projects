import React, { Component } from "react";

export default class SingleColor extends Component {
  state = {
    alert: false,
  };

  timeOutSet = "";

  handleCopyToClipBoard = () => {
    this.setState({ alert: true });
    navigator.clipboard.writeText(this.props.color.hexString());
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.alert !== this.state.alert) {
      this.timeOutSet = setTimeout(() => this.setState({ alert: false }), 1500);
    }
  }

  componentWillUnmount() {
    return () => clearTimeout(this.timeOutSet);
  }

  render() {
    const { index, listLength, color } = this.props;
    return (
      <article
        onClick={this.handleCopyToClipBoard}
        className={index > listLength / 2 ? "color-light color" : "color"}
        style={{ backgroundColor: `${color.hexString()}` }}
      >
        <p className="percent-value">{color.weight} %</p>
        <p className="color-value">{color.hexString()}</p>
        {this.state.alert && (
          <p className={index > listLength / 2 ? "alert-light alert" : "alert"}>
            copied to clipboard
          </p>
        )}
      </article>
    );
  }
}
