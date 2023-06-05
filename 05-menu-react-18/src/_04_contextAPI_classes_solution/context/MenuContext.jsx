import React, { Component } from "react";
import { createContext } from "react";
import menuItems from "./../../data";

const categories = ["all", ...new Set(menuItems.map((item) => item.category))];

export const MenuContext = createContext();

export default class MenuContextProvider extends Component {
  state = {
    category: "all",
  };

  showCategory = (newCategory) => {
    this.setState((prevState) => ({ ...prevState, category: newCategory }));
  };
  render() {
    const filteredMenu = menuItems.filter(
      (item) => item.category === this.state.category,
    );
    const menusToRender =
      this.state.category === "all" ? menuItems : filteredMenu;
    return (
      <MenuContext.Provider
        value={{
          categories,
          category: this.state.category,
          showCategory: this.showCategory,
          menusToRender,
        }}
      >
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}
