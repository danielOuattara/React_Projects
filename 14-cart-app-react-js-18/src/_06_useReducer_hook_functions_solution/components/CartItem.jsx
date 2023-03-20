import React from "react";
//---------------------------------------------------------

export default function CartItem({
  id,
  img,
  title,
  price,
  quantity,
  removeItem,
  increaseAmount,
  decreaseAmount,
}) {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>
          <b>
            {title} <span className="item-price">${price}</span>
          </b>
        </h4>
        <span>___</span>

        <h4>
          <b>
            sub price{" "}
            <span className="item-price">
              ${parseFloat((price * quantity).toFixed(2))}
            </span>{" "}
          </b>
        </h4>

        {/* remove button */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increaseAmount(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{quantity}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decreaseAmount(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
}
