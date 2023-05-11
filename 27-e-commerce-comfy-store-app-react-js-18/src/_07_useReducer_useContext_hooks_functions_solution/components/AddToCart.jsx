import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context";
import AmountButtons from "./AmountButtons";
import { AddToCartWrapper } from "./styleWrappers";

//---------------------------------------------------------------

export default function AddToCart(props) {
  const [mainColor, setMainColor] = useState(props.colors[0]);
  return (
    <AddToCartWrapper>
      <div className="colors">
        <span>colors: </span>
        <div>
          {props.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setMainColor(props.colors[index])}
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
      <div className="btn-containers"></div>
    </AddToCartWrapper>
  );
}
