import { Component } from "react";
import { connect } from "react-redux";
import { menusActions } from "../redux/menus/menus-slice";

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
                  this.props.dispatch(
                    menusActions.selectCategory({ categoryName: categoryItem }),
                  )
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
