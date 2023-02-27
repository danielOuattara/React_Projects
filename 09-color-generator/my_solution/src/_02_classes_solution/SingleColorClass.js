import React, { Component } from "react";
import rgbToHex from "./../utils";



export default class SingleColorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
    };
  }

  handleCopyToClipBoard = () => {
    const { rgb } = this.props;
    let color = rgbToHex(...rgb);
    this.setState({ alert: true });
    navigator.clipboard.writeText(color);
  };


  componentDidUpdate() {  // ??
    const timeOutSet = setTimeout(() => this.setState({ alert: false }), 1500);
    return () => clearTimeout(timeOutSet);
  }

  render() {
    const { rgb, weight, index } = this.props;
    let color = rgbToHex(...rgb);
    return (
      <article
        onClick={this.handleCopyToClipBoard}
        className={index > 7 ? "color-light color" : "color"}
        style={{ backgroundColor: `${color}` }}
      >
        <p className="percent-value">{weight} %</p>
        <p className="color-value">{color}</p>
        {this.state.alert && (
          <p className={index > 7 ? "alert-light alert" : "alert"}>
            copied to clipboard
          </p>
        )}
      </article>
    );
  }
}
