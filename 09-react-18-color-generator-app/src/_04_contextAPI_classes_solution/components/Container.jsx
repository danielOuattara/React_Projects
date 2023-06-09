import { Component } from "react";
import { ColorForm, ColorList } from "./";

export default class Container extends Component {
  render() {
    return (
      <>
        <p className="title">context API + class solution</p>
        <ColorForm />
        <ColorList />
      </>
    );
  }
}
