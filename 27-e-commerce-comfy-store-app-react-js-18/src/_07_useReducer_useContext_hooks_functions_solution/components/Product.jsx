import { priceFormatter } from "./../../utilities";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./styleWrappers";

export default function Product(props) {
  return (
    <ProductWrapper>
      <div className="container">
        <img src={props.image} alt={props.name} />
        <Link to={`/products/${props.id}`} className="link container">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{props.name}</h5>
        <p>{priceFormatter(props.price)}</p>
      </footer>
    </ProductWrapper>
  );
}
