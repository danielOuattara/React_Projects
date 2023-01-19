import React, { useState } from "react";

const TourItem = ({ id, image, info, price, name, removeTourItem }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={`${name} decription`} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.substring(0, 100) + " ..."}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTourItem(id)}>
          remove this tour
        </button>
      </footer>
    </article>
  );
};

export default TourItem;
