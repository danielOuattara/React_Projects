import { useMenuContext } from "../context/MenuContext";
export default function MenuCategories() {
  const { category, categories, setCategory } = useMenuContext();
  return (
    <ul className="btn-container">
      {categories.map((categoryItem) => {
        return (
          <li key={categoryItem}>
            <button
              className={`filter-btn ${
                category === categoryItem ? "active" : null
              }`}
              onClick={() => setCategory(categoryItem)}
            >
              {categoryItem}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
