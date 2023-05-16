import { useState } from "react";
import { connect } from "react-redux";
import { REMOVE_ONE_TOUR } from "./../redux/tours/toursActions";

//------------------------------------------

function TourItem({ id, image, info, price, name, removeTourItem }) {
  const [readMore, setReadMore] = useState(false);

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
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTourItem: (id) => dispatch({ type: REMOVE_ONE_TOUR, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TourItem);
