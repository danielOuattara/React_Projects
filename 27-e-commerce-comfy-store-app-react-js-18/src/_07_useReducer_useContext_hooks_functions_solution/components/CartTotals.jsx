import { useCartContext, useFilterContext } from "../context/";
import { priceFormatter } from "./../../utilities";
import { CartTotalWrapper } from "./styleWrappers";
import { Link } from "react-router-dom";

export default function CartTotals() {
  const { totalAmount, shippingFee } = useCartContext();
  return (
    <CartTotalWrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{priceFormatter(totalAmount)}</span>
          </h5>
          <p>
            shipping fee : <span>{priceFormatter(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            order total :
            <span>{priceFormatter(totalAmount + shippingFee)}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn">
          {" "}
          proceed to checkout
        </Link>
      </div>
    </CartTotalWrapper>
  );
}
