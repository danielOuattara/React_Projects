import { useState } from "react";
import { useDispatch } from "react-redux";
import { toursActions } from "../store/tours/tours-slice";
//------------------------------------------

export default function TourItem({ id, image, info, price, name }) {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();

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
        <button
          className="delete-btn"
          onClick={() => dispatch(toursActions.removeOneTour(id))}
        >
          remove this tour
        </button>
      </footer>
    </article>
  );
}
