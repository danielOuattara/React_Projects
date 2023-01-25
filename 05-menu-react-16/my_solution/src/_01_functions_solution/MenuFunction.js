import React from "react";

const Menu = ({ menusToRender }) => {
  return (
    <div className="section-center">
      {menusToRender.map((menu) => {
        return (
          <article key={menu.id} className="menu-item">
            <img className="photo" src={menu.img} alt={menu.title} />
            <div className="item-info">
              <header>
                <h4 className="title">{menu.title}</h4>
                <h4 className="price">${menu.price}</h4>
              </header>
              <p className="item-text">{menu.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
