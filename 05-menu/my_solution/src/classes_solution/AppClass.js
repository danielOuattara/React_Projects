import React, { Component } from "react";
import MenuClass from "./MenuClass";
import ListCategoriesClass from "./ListCategoriesClass";
import items from "./../data";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["all", ...new Set(items.map((item) => item.category))],
      category: "all",
    };
  }

  showCategory = (newCategory) => {
    this.setState({ category: newCategory });
  };

  render() {
    const filteredMenus = items.filter(
      (item) => item.category === this.state.category
    );
    const menusToRender = this.state.category === "all" ? items : filteredMenus;

    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>

            <ListCategoriesClass
              categories={this.state.categories}
              showCategory={this.showCategory}
            />
            <MenuClass menusToRender={menusToRender} />
          </div>
        </section>
      </main>
    );
  }
}
