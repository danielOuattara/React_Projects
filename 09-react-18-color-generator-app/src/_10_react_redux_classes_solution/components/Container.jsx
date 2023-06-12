import { Component } from "react";
import { ColorForm, ColorList } from "./";

export default class Container extends Component {
  render() {
    return (
      <>
        <p className="title">react redux classes solution</p>
        <ColorForm />
        <ColorList />
      </>
    );
  }
}
