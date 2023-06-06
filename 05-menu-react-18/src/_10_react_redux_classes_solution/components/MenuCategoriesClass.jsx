import { Component } from "react";
import { connect } from "react-redux";
import { selectCategory } from "../redux/menus/menusAction";

class MenuCategories extends Component {
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
                onClick={() =>
                  this.props.dispatch(selectCategory(categoryItem))
                }
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

const mapStateToProps = (state) => {
  return {
    categories: state.menus.categories,
    category: state.menus.category,
  };
};

export default connect(mapStateToProps, null)(MenuCategories);
