import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "./../redux/modal/modal-slice";
import { clearCart } from "./../redux/cart/cart-slice";

export default function Modal() {
  useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(hideModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleClearCart}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(hideModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}
