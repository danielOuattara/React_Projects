import React from "react";

const ListCategories = ({ categories, setCategory }) => {
  return (
    <ul className="btn-container">
      {categories.map((category) => {
        return (
          <li key={category}>
            <button
              className="filter-btn"
              onClick={() => setCategory(category)}
            >
              {" "}
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListCategories;
