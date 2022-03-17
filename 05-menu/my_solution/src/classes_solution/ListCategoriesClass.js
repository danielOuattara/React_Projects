
import React, { Component } from 'react'


export default class ListCategoriesClass extends Component {
  render() {
    const { categories, showCategory } = this.props;
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
  }
};

