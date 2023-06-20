import { connect } from "react-redux";
import { updateQuantity, removeItem } from "./../redux/cart/cartAction";

function CartItem(props) {
  return (
    <div className="cart-item">
      <img src={props.img} alt={props.title} />
      <div>
        <h4>{props.title}</h4>
        <h4 className="item-price">${props.price}</h4>
        <button
          className="remove-btn"
          onClick={() => props.handleRemoveItem(props.id)}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => props.handleUpdateQuantity(props.id, +1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="amount">{props.amount}</p>
        <button
          className="amount-btn"
          onClick={() => props.handleUpdateQuantity(props.id, -1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveItem: (id) => dispatch(removeItem(id)),
    handleUpdateQuantity: (id, value) => dispatch(updateQuantity(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
