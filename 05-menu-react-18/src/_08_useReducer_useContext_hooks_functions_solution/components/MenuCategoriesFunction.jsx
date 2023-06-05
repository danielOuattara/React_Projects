import { useMenuContext } from "../context/MenuContext";

export default function MenuCategories() {
  const { categories, category, handleSwitchCategory } = useMenuContext();
  return (
    <ul className="btn-container">
      {categories.map((categoryItem) => {
        return (
          <li key={categoryItem}>
            <button
              className={`filter-btn ${
                category === categoryItem ? "active" : null
              }`}
              onClick={() => handleSwitchCategory(categoryItem)}
            >
              {categoryItem}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
