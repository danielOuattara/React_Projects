import { useSelector, useDispatch } from "react-redux";
import { menusActions } from "../redux/menus/menus-slice";

export default function MenuCategories() {
  const { category, categories } = useSelector((state) => state.menus);

  const dispatch = useDispatch();
  return (
    <ul className="btn-container">
      {categories.map((categoryItem) => {
        return (
          <li key={categoryItem}>
            <button
              className={`filter-btn ${
                category === categoryItem ? "active" : null
              }`}
              onClick={() =>
                dispatch(
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
