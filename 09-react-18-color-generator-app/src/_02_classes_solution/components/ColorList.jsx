import { Component } from "react";
import { SingleColor } from "./";

export default class ColorList extends Component {
  render() {
    return (
      <section className="colors">
        {this.props.list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              color={color}
              listLength={this.props.list.length}
            />
          );
        })}
      </section>
    );
  }
}
