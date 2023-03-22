import { Component } from "react";
import { AppContext } from "../context/AppContext";
//---------------------------------------------------------

export default class CartItem extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <article className="cart-item">
            <img src={this.props.img} alt={this.props.title} />
            <div>
              <h4>
                <b>
                  {this.props.title}{" "}
                  <span className="item-price">${this.props.price}</span>
                </b>
              </h4>
              <span>___</span>

              <h4>
                <b>
                  sub price{" "}
                  <span className="item-price">
                    $
                    {parseFloat(
                      (this.props.price * this.props.quantity).toFixed(2),
                    )}
                  </span>{" "}
                </b>
              </h4>

              {/* remove button */}
              <button
                className="remove-btn"
                onClick={() => context.removeItem(this.props.id)}
              >
                remove
              </button>
            </div>
            <div>
              {/* increase amount */}
              <button
                className="amount-btn"
                onClick={() => context.increaseAmount(this.props.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                </svg>
              </button>
              {/* amount */}
              <p className="amount">{this.props.quantity}</p>
              {/* decrease amount */}
              <button
                className="amount-btn"
                onClick={() => context.decreaseAmount(this.props.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
            </div>
          </article>
        )}
      </AppContext.Consumer>
    );
  }
}
