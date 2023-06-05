import React, { Component } from "react";
import { toursActions } from "../store/tours/tours-slice";
//------------------------------------------

export default class TourItem extends Component {
  render() {
    return (
      <article className="single-tour">
        <img src={this.props.image} alt={`${this.props.name} description`} />
        <footer>
          <div className="tour-info">
            <h4>{this.props.name}</h4>
            <h4 className="tour-price">${this.props.price}</h4>
          </div>
          <p>
            {this.props.readMore
              ? this.props.info
              : this.props.info.substring(0, 150) + " ..."}
            <button
              onClick={() => this.props.setReadMore(!this.props.readMore)}
            >
              {this.props.readMore ? "show less" : "read more"}
            </button>
          </p>
          <button
            className="delete-btn"
            onClick={() =>
              this.props.dispatch(toursActions.removeOneTour(this.props.id))
            }
          >
            remove this tour
          </button>
        </footer>
      </article>
    );
  }
}

/* 


function TourItem({ id, image, info, price, name }) {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();


}
 */
