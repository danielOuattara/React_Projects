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
              onClick={() => props.handleSwitchCategory(categoryItem)}
            >
              {categoryItem}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
