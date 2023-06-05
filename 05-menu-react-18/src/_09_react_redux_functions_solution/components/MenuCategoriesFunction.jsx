import { connect } from "react-redux";
import { selectCategory } from "../redux/menus/menusAction";

function MenuCategories(props) {
  return (
    <ul className="btn-container">
      {props.categories.map((categoryItem) => {
        return (
          <li key={categoryItem}>
            <button
              className={`filter-btn ${
                props.category === categoryItem ? "active" : null
              }`}
              onClick={() => props.dispatch(selectCategory(categoryItem))}
            >
              {categoryItem}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.menus.categories,
    category: state.menus.category,
  };
};

export default connect(mapStateToProps, null)(MenuCategories);
