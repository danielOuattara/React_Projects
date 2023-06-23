import { CartColumnsWrapper } from "./styleWrappers";

export default function CartColumns() {
  return (
    <CartColumnsWrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </CartColumnsWrapper>
  );
}
