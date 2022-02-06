import React from 'react';

const ListCategories = ({categories, showCategory}) => {
  return (
    <ul className="btn-container">
      {categories.map( category => {
        return (
          <li key={category}> 
            <button 
              className='filter-btn' 
              onClick={() => showCategory(category)}> {category} 
            </button>
          </li>
        );
      })}
    </ul>
  ); 
};

export default ListCategories;
