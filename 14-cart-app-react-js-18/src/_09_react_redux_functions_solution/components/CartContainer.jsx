import { useEffect } from "react";
import { CartItem } from "./";
import { connect } from "react-redux";

import { showModal } from "../redux/modal/modalActions";
import { getCartItems } from "./../redux/cart/cartAction";

function CartContainer(props) {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (props.cart.cartItems.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {props.cart.cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${props.cart.totalPrice}</span>
          </h4>
        </div>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => dispatch(showModal())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isModalVisible: state.modal.isModalVisible,
  };
};

/* 
 ! IMPORTANT
 ------------
 mapDispatchToProps is not required: use directly the "dispatch" in the props
*/

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleClearCart: () => dispatch(clearCart()),
//   };
// };

export default connect(mapStateToProps /* mapDispatchToProps */)(CartContainer);
