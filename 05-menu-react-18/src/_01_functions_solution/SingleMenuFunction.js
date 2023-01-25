import React from "react";

export default function SingleMenuFunction({ id, img, title, price, desc }) {
  return (
    <article key={id} className="menu-item">
      <img className="photo" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h4 className="title">{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
}
