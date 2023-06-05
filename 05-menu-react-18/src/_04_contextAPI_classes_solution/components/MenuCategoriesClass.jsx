import { Component } from "react";
import { MenuContext } from "../context/MenuContext";

export default class MenuCategoriesClass extends Component {
  render() {
    return (
      <MenuContext.Consumer>
        {(context) => (
          <ul className="btn-container">
            {context.categories.map((categoryItem) => {
              return (
                <li key={categoryItem}>
                  <button
                    className={`filter-btn ${
                      context.category === categoryItem ? "active" : null
                    }`}
                    onClick={() => context.showCategory(categoryItem)}
                  >
                    {categoryItem}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </MenuContext.Consumer>
    );
  }
}
