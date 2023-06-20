import { Component } from "react";
import { CartContainer, Navbar, Modal } from "./index";
import { connect } from "react-redux";
import { calculateTotals } from "./../redux/cart/cartAction";
import ReactDOM from "react-dom";

class AppContainer extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.cartItems !== this.props.cartItems ||
      prevProps.handleCalculateTotals !== this.props.calculateTotals
    ) {
      this.props.handleCalculateTotals();
    }
  }

  render() {
    return (
      <main>
        <p className="title"> react redux classes solution</p>
        {this.props.isModalVisible &&
          ReactDOM.createPortal(
            <Modal />,
            document.getElementById("modal-redux-classes"),
          )}
        <Navbar />
        <CartContainer />
      </main>
    );
  }
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
