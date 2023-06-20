import { Component } from "react";
import { connect } from "react-redux";
import { clearCart } from "./../redux/cart/cart-slice";
import { hideModal } from "../redux/modal/modal-slice";

class Modal extends Component {
  handleClearCart = () => {
    this.props.dispatch(clearCart());
    this.props.dispatch(hideModal());
  };
  render() {
    return (
      <aside className="modal-container">
        <div className="modal">
          <h4>Remove all items from your shopping cart?</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={this.handleClearCart}
            >
              confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => this.props.dispatch(hideModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps, null)(Modal);
