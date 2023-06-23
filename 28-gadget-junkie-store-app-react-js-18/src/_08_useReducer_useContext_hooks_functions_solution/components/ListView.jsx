import { priceFormatter } from "./../../utilities";
import { Link } from "react-router-dom";
import { ListViewWrapper } from "./styleWrappers";

export default function ListView(props) {
  return (
    <ListViewWrapper>
      {props.filteredProducts.map((item) => (
        <article key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <h5 className="price">{priceFormatter(item.price)}</h5>
            <p>{item.description.substring(0, 150)} ...</p>
            <Link to={`/products/${item.id}`} className="btn">
              details
            </Link>
          </div>
        </article>
      ))}
    </ListViewWrapper>
  );
}
