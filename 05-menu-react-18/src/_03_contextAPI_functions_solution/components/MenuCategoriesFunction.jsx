import { MenuContext } from "../context/MenuContext";

export default function MenuCategories() {
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
                  onClick={() => context.setCategory(categoryItem)}
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
