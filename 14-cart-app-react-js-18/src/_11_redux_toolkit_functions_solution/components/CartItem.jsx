import { ChevronDown, ChevronUp } from "./";
import { removeItem, updateItemQuantity } from "./../redux/cart/cart-slice";
import { useDispatch } from "react-redux";

export default function CartItem(props) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={props.img} alt={props.title} />

      <div>
        <h4>{props.title}</h4>
        <h4 className="item-price">${props.price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem({ id: props.id }))}
        >
          remove
        </button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch(updateItemQuantity({ id: props.id, value: +1 }))
          }
        >
          <ChevronUp />
        </button>
        <p className="amount">{props.amount}</p>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch(updateItemQuantity({ id: props.id, value: -1 }))
          }
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}
