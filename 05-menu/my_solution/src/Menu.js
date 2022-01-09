import React from 'react';

const Menu = ({items, category}) => {

  const filteredMenus = items.filter(item => item.category === category);
  
  const menusToRender = category === 'all' ? items : filteredMenus;
  
  return (
    <div className='section-center'>
      {menusToRender.map(item => {
        const { id, img, title, price, desc} = item;
        return (
          <article key={id} className='menu-item'>
            <img className='photo' src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4 className='title'>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
