import { priceFormatter } from "./../../utilities";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/";
import { CartItemsWrapper } from "./styleWrappers";

//---------------------------------------------
export default function CartItem(props) {
  const { removeItem, updateAmount } = useCartContext();
  return (
    <CartItemsWrapper>
      <div className="title">
        <img src={props.item.image} alt={props.name} />
        <div>
          <h5 className="name">{props.item.name}</h5>
          <p className="color">
            {" "}
            color: <span style={{ background: props.item.color }}></span>
          </p>
          <h5 className="price-small">{priceFormatter(props.item.price)}</h5>
        </div>
      </div>
      <h5 className="price">{priceFormatter(props.item.price)}</h5>
      <AmountButtons
        amount={props.item.amount}
        id={props.item.id}
        updateAmount={updateAmount}
      />
      <h5 className="subtotal">
        {priceFormatter(props.item.price * props.item.amount)}
      </h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(props.item.id)}
      >
        <FaTrash />
      </button>
    </CartItemsWrapper>
  );
}
