import { Component } from "react";
import { Menu, MenuCategories } from "./components";
import menuItems from "./../data";

const categories = ["all", ...new Set(menuItems.map((item) => item.category))];

export default class AppClass extends Component {
  state = {
    category: "all",
    categories,
  };

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
            <p>classes solution</p>
            <h2>our menu </h2>
            <div className="underline"></div>

            <MenuCategories
              categories={this.state.categories}
              showCategory={this.showCategory}
              category={this.state.category}
            />
            <Menu menusToRender={menusToRender} />
          </div>
        </section>
      </main>
    );
  }
}
