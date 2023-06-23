import { FaPlus, FaMinus } from "react-icons/fa";
import { AmountButtonsWrapper } from "./styleWrappers";

export default function AmountButtons(props) {
  return (
    <AmountButtonsWrapper className="amounts-btns">
      <button type="button" onClick={() => props.updateAmount(-1, props.id)}>
        <FaMinus />
      </button>
      <h2 className="amount">{props.amount}</h2>
      <button type="button " onClick={() => props.updateAmount(+1, props.id)}>
        <FaPlus />
      </button>
    </AmountButtonsWrapper>
  );
}
