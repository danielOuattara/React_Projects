import { useState, useContext } from "react";
import { ToursContext } from "./../context/ToursContext";

const TourItem = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false);
  const { removeTourItem } = useContext(ToursContext);

  return (
    <article className="single-tour">
      <img src={image} alt={`${name} description`} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.substring(0, 150) + " ..."}
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
