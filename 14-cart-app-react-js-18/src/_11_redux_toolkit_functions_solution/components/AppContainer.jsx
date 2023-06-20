import ReactDOM from "react-dom";
import { Navbar, CartContainer, Modal } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./../redux/cart/cart-slice";

export default function AppContainer() {
  const { isModalVisible } = useSelector((state) => state.modal);
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <p className="title"> react redux toolkit functions solution</p>
      {isModalVisible &&
        ReactDOM.createPortal(
          <Modal />,
          document.getElementById("modal-redux-toolkit-functions"),
        )}
      <Navbar />
      <CartContainer />
    </main>
  );
}
