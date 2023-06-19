import { CartContext } from "../context/CartContext";

export default function CartItem(props) {
  return (
    <CartContext.Consumer>
      {(context) => {
        return (
          <article className="cart-item">
            <img src={props.img} alt={props.title} />
            <div>
              <h4>
                <b>
                  {props.title}{" "}
                  <span className="item-price">${props.price}</span>
                </b>
              </h4>
              <span>___</span>

              <h4>
                <b>
                  sub price{" "}
                  <span className="item-price">
                    ${parseFloat((props.price * props.quantity).toFixed(2))}
                  </span>{" "}
                </b>
              </h4>

              <button
                className="remove-btn"
                onClick={() => context.removeItem(props.id)}
              >
                remove
              </button>
            </div>
            <div>
              <button
                className="amount-btn"
                onClick={() => context.updateQuantity(props.id, +1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                </svg>
              </button>
              {/* amount */}
              <p className="amount">{props.quantity}</p>
              {/* decrease amount */}
              <button
                className="amount-btn"
                onClick={() => context.updateQuantity(props.id, -1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
            </div>
          </article>
        );
      }}
    </CartContext.Consumer>
  );
}
