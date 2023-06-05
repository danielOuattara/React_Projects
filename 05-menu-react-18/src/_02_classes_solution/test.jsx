import { Component } from "react";
import MenuClass from "./MenuClass";
import MenuCategoriesClass from "./MenuCategoriesClass";
import menuItems from "./../data";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["all", ...new Set(menuItems.map((item) => item.category))],
      category: "all",
    };
  }

  showCategory = (newCategory) => {
    this.setState((prevState) => ({ ...prevState, category: newCategory }));
  };

  render() {
    const filteredMenus = menuItems.filter(
      (item) => item.category === this.state.category,
    );
    const menusToRender =
      this.state.category === "all" ? menuItems : filteredMenus;

    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu (class solution)</h2>
            <div className="underline"></div>

            <MenuCategoriesClass
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
