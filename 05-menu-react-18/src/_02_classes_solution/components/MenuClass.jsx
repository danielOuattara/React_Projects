import { Component } from "react";
import { SingleMenu } from "./";

export default class MenuClass extends Component {
  render() {
    return (
      <div className="section-center">
        {this.props.menusToRender.map((menu) => (
          <SingleMenu key={menu.id} {...menu} />
        ))}
      </div>
    );
  }
}
