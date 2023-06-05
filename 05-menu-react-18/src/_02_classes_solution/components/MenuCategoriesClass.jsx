import { Component } from "react";

export default class MenuCategoriesClass extends Component {
  render() {
    return (
      <ul className="btn-container">
        {this.props.categories.map((categoryItem) => {
          return (
            <li key={categoryItem}>
              <button
                className={`filter-btn ${
                  this.props.category === categoryItem ? "active" : null
                }`}
                onClick={() => this.props.showCategory(categoryItem)}
              >
                {categoryItem}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
