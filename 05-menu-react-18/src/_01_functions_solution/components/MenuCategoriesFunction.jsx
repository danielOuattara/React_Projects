export default function MenuCategories(props) {
  return (
    <ul className="btn-container">
      {props.categories.map((categoryItem) => {
        return (
          <li key={categoryItem}>
            <button
              className={`filter-btn ${
                props.category === categoryItem ? "active" : null
              }`}
              onClick={() => props.setCategory(categoryItem)}
            >
              {categoryItem}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
