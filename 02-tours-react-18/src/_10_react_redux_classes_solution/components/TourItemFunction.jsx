import { Component } from "react";
import { connect } from "react-redux";
import { REMOVE_ONE_TOUR } from "./../redux/tours/toursActions";

//------------------------------------------

class TourItem extends Component {
  state = {
    readMore: false,
  };
  render() {
    const { id, image, info, price, name, removeTourItem } = this.props;
    return (
      <article className="single-tour">
        <img src={image} alt={`${name} description`} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {this.state.readMore ? info : info.substring(0, 150) + " ..."}
            <button
              onClick={() => this.setState({ readMore: !this.state.readMore })}
            >
              {this.state.readMore ? "show less" : "read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTourItem(id)}>
            remove this tour
          </button>
        </footer>
      </article>
    );
  }
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
