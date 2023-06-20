import { CartContainer, Navbar, Modal } from "./index";
import { connect } from "react-redux";
import { calculateTotals } from "./../redux/cart/cartAction";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function AppContainer(props) {
  const { cartItems, handleCalculateTotals, isModalVisible } = props;

  useEffect(() => {
    handleCalculateTotals();
  }, [cartItems, handleCalculateTotals]);

  return (
    <main>
      {isModalVisible &&
        ReactDOM.createPortal(
          <Modal />,
          document.getElementById("modal-redux-functions"),
        )}
      <p className="title"> react redux functions solution</p>
      <Navbar />
      <CartContainer />
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    isModalVisible: state.modal.isModalVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCalculateTotals: () => dispatch(calculateTotals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
