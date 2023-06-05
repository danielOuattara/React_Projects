import { Component } from "react";
import { SingleMenu } from "./";
import { MenuContext } from "../context/MenuContext";

export default class MenuClass extends Component {
  render() {
    return (
      <MenuContext.Consumer>
        {(context) => (
          <div className="section-center">
            {context.menusToRender.map((menu) => (
              <SingleMenu key={menu.id} {...menu} />
            ))}
          </div>
        )}
      </MenuContext.Consumer>
    );
  }
}
