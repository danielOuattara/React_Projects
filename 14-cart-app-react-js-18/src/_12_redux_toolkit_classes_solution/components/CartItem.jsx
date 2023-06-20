import { connect } from "react-redux";
import { Component } from "react";
import { updateItemQuantity, removeItem } from "./../redux/cart/cart-slice";

class CartItem extends Component {
  render() {
    return (
      <div className="cart-item">
        <img src={this.props.img} alt={this.props.title} />
        <div>
          <h4>{this.props.title}</h4>
          <h4 className="item-price">${this.props.price}</h4>
          <button
            className="remove-btn"
            onClick={() => this.props.handleRemoveItem(this.props.id)}
          >
            remove
          </button>
        </div>
        <div>
          <button
            className="amount-btn"
            onClick={() =>
              this.props.handleUpdateItemQuantity(this.props.id, +1)
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          </button>
          <p className="amount">{this.props.amount}</p>
          <button
            className="amount-btn"
            onClick={() => this.props.handleUpdateQuantity(this.props.id, -1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveItem: (id) => dispatch(removeItem(id)),
    handleUpdateQuantity: (id, value) =>
      dispatch(updateItemQuantity(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
