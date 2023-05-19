import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context";
import AmountButtons from "./AmountButtons";
import { AddToCartWrapper } from "./styleWrappers";

//---------------------------------------------------------------

export default function AddToCart(props) {
  const [mainColor, setMainColor] = useState(props.singleProduct.colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  // const updateAmount = (value) => {
  //   return setAmount((prevState) => {
  //     if (prevState + value > props.stock || prevState + value <= 0) {
  //       return prevState;
  //     }
  //     return prevState + value;
  //   });
  // };

  const updateAmount = (value) => {
    return setAmount((prevState) => {
      if (
        prevState + value <= props.singleProduct.stock &&
        prevState + value >= 1
      ) {
        return prevState + value;
      }
      return prevState;
    });
  };

  return (
    <AddToCartWrapper>
      <div className="colors">
        <span>colors: </span>
        <div>
          {props.singleProduct.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setMainColor(props.singleProduct.colors[index])}
              className={
                mainColor === color ? " color-btn active" : "color-btn"
              }
              style={{ backgroundColor: color }}
            >
              {" "}
              {mainColor === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-containers">
        <AmountButtons amount={amount} updateAmount={updateAmount} />
        <Link
          to="/cart"
          className="btn"
          onClick={() =>
            addToCart(
              props.singleProduct.id,
              mainColor,
              amount,
              props.singleProduct,
            )
          }
          // id, mainColor, amount, singleProduct
        >
          add to cart
        </Link>
      </div>
    </AddToCartWrapper>
  );
}
