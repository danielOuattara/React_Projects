import { connect } from "react-redux";
import { clearCart } from "./../redux/cart/cartAction";
import { hideModal } from "../redux/modal/modalActions";

function Modal(props) {
  const handleClearCart = () => {
    props.dispatch(clearCart());
    props.dispatch(hideModal());
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
            onClick={() => props.dispatch(hideModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

const mapStateToProps = (state) => {
  return state;
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps, null)(Modal);
