import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {

  // method 1
  // const categories = items.reduce((categories, item) => {
  //   return categories.includes(item.category) ? categories : categories.concat(item.category)
  // }, []);
  
  // categories.unshift('all');

  // method  2 
  const categories = ["all", ...new Set(items.map(item => item.category))];
  
  const [category, setCategory] = useState('all');

  const showCategory = (category) => {
    setCategory(() => {
      return category;
    });
  }

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>our menu</h2>
          <div className='underline'></div>

          <Categories categories={categories} showCategory={showCategory}/>

          <Menu items={items} category={category}/>
        </div>
      </section>
    </main>
  );
}

export default App;
